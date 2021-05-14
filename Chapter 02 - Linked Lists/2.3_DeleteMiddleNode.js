const LinkedList = require("./utils/SinglyLL");

function deleteMiddleNode(deletedNode) {
  if (!deletedNode.next) return false;

  const nextNode = deletedNode.next.next;
  deletedNode.value = deletedNode.next.value;
  deletedNode.next = nextNode;
}

const LL = new LinkedList();
LL.addArray(["a", "b", "c", "d", "e", "f"]);

const node = LL.findValue("null");
deleteMiddleNode(node);
LL.traverseTree();
