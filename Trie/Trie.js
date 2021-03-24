const TrieNode = require("./TrieNode")
class Trie {
    constructor() {
        this.root = new TrieNode("") 
    }
    insert(word) {
        let currentNode = this.root
        for (let char of word) {
            if(currentNode.children[char]) {
                currentNode = currentNode.children[char]
            } else {
                const newNode = new TrieNode(char)
                currentNode.children[char] = newNode
                currentNode = newNode
            }
        }
        currentNode.is_end = true
    }
    print(){
            console.debug(JSON.stringify(this.root.children))
    }
    dfs(node, pre) {
        console.log(`current char${this.node}, all pre: ${pre}`)
        if(node.is_end) {
            this.output.push(pre + node.char)
        }
        for (let childKey in node.children) {
            this.dfs(node.children[childKey], pre + node.char)
        }
    }
    search(word) {
        this.output = []
        let currentNode = this.root
        console.log(currentNode)
        for(let char of word) {
            console.log(`current character: ${char}`)
            if(currentNode.children[char]) {
                console.log(currentNode.char)
                currentNode = currentNode.children[char]
            } else {
                return []
            }
        }
        this.dfs(currentNode, word.substring(0, word.length - 1))
        console.debug(this.output)
    }
}


const aTrie = new Trie()
aTrie.insert("somebody")
aTrie.insert("someday")
aTrie.insert("soon")
aTrie.insert("someone")

aTrie.search("bax")
