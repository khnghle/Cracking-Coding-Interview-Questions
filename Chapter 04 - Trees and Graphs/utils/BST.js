export class Node {
  constructor (value){
    this.value = value;
    this.left = this.right = null;
  }
}


export class BST {
  constructor () {
    this.root = null
    this.depth = 0
  }

  //Compare the root
   //if val < root, go left
     //else go right
     
     // if this.left (or right) is null, you want to set newNode 
  addVal (val){
    const newNode = new Node(val)
    if (!this.root) this.root= newNode


    /*
    1
     \
      2
       \
        3
    */
    // add the node

    // let currNode = this.root 
    
    // while(currNode){
    //   if(something) currNode = currNode.left
    //   if(something else) currNode = currNode.right

    //   if(condition we are looking for) currNode.left = newNode
    //   else currNode.right = newNode 
    // }

    // if(val < currNode.value) {
    //   if(!currNode.left) currNode.left = newNode (finished)
    //   else currNode = currNode.left 
    // }



    const helper = (val, currNode) => {
        if (!currNode) {
            
        }
        if(val < currNode.value) helper(val, currNode.left)
        else helper(val, currNode.left)
    }
  }

  getTree (){
    return this.root;
  }
  
  getDepth (){
    return this.depth
  }
}