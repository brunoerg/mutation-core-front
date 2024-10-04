<template>
  <div>
    <!-- Dropdown to select which file's diffs to display -->
    <select v-model="selectedFileIndex" @change="onFileChange">
      <option v-for="(file, index) in diffs" :key="index" :value="index">
        {{ file.filename }}
      </option>
    </select>

    <!-- Display all diffs for the selected file -->
    <div v-if="selectedFile">
      <div v-if="'mutation_score' in selectedFile" class="mutation-score">
        <h3>Mutation Score: <b v-bind:class="score">{{ selectedFile.mutation_score * 100 }}%</b></h3>
        <h4>See the surviving mutants below. You should write tests to kill them:</h4>
      </div>
      <div v-for="(diff, index) in selectedFile.diffs" :key="index" class="diff-box">
        <pre v-html="parseDiff(diff)"></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    diffs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedFileIndex: 0  // The index of the currently selected file
    };
  },
  computed: {
    selectedFile() {
      // Get the currently selected file based on the dropdown value
      return this.diffs[this.selectedFileIndex];
    },
    score() {
      return this.diffs[this.selectedFileIndex].mutation_score * 100 > 75 ? 'green' : 'red';
    }
  },
  methods: {
    onFileChange() {
      // Handle logic if necessary when the file changes
    },
    parseDiff(diff) {
      return diff
        .split('\n')
        .map(line => {
          const trimmedLine = line.trimStart();  // Remove leading spaces before checking
          if (trimmedLine.startsWith('+')) {
            return `<span class="diff-add">${this.escapeHtml(line)}</span>`;
          } else if (trimmedLine.startsWith('-')) {
            return `<span class="diff-del">${this.escapeHtml(line)}</span>`;
          } else if (trimmedLine.startsWith('@@')) {
            return `<span class="diff-hunk">${this.escapeHtml(line)}</span>`;
          } else if (trimmedLine.startsWith('diff')) {
            return `<span class="diff-header">${this.escapeHtml(line)}</span>`;
          } else if (
            trimmedLine.startsWith('index') ||
            trimmedLine.startsWith('---') ||
            trimmedLine.startsWith('+++')
          ) {
            return `<span class="diff-info">${this.escapeHtml(line)}</span>`;
          } else {
            return this.escapeHtml(line);
          }
        })
        .join('<br>'); // Join with <br> to maintain line breaks
    },
    escapeHtml(text) {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }
  }
};
</script>

<style>
select {
  padding: 1%;
  text-align: center;
  font-family: monospace;
  display: block;
  margin: 0 auto;
  margin-top: 3%;
  background-color: #2a2a2a;
  color: rgb(230, 158, 14);
}

.green {
  color: green;
}

.red {
  color: red;
}

.diff-box {
  margin-top: 5%;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #2a2a2a;
  max-width: 100%;
  /* Ensure diff-box does not exceed the width */
  box-sizing: border-box;
  /* Ensure padding is included in the width */
}

.diff-box pre {
  padding: 10px;
  white-space: pre-wrap;
  /* Wrap the content if it exceeds the width */
  word-wrap: break-word;
  /* Ensure long words break to avoid overflow */
  overflow-wrap: break-word;
  /* Handles breaking long words for wrapping */
  font-family: monospace;
  max-width: 100%;
  /* Ensure pre does not exceed the width of diff-box */
  box-sizing: border-box;
  /* Include padding in width calculations */
}

.mutation-score {
  margin-top: 2%;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #2a2a2a;
  max-width: 100%;
  /* Ensure diff-box does not exceed the width */
  box-sizing: border-box;
  /* Ensure padding is included in the width */
}

.mutation-score h3 {
  text-align: center;
}

.mutation-score h4 {
  text-align: center;
}

.diff-add {
  color: orange;
}

.diff-del {
  color: red;
}

.diff-hunk {
  color: rgb(81, 96, 165);
  font-weight: bold;
}

.diff-header {
  color: rgba(228, 180, 21, 0.891);
  font-weight: bold;
}

.diff-info {
  color: gray;
}
</style>