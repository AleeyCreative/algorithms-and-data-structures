## Introduction
A Trie data structure is a data structure that can generate a set of output based on a given input. It is useful in implementing the auto-suggest feature in smartphone keyboards.

## TrieNode
The trie node consists of three things:
a. `char`: This is the value that the node holds
b. `isEnd`: This is a boolean that is used to indicate if the node is the end of the word
c. `children`: This contain all the children of the given node.

## Trie
a. We begin by creating the Trie class.