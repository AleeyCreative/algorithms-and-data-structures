class TrieNode {
    constructor(char) {
        this.char = char
        this.is_end = false
        this.children = {}
    }
}

module.exports = TrieNode