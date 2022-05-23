const queueTypes = {
  MIN: "MIN_PRIORITY_QUEUE",
  MAX: "MAX_PRIORITY_QUEUE",
};

class QueueItem {
  #value;
  #priority;
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
  getValue() {
    return this.value;
  }
  getPriority() {
    return this.priority;
  }
}

class PriorityQueue {
  constructor(type) {
    this.collection = [];
    this.isMinPriorityQueue = type === queueTypes.MIN ? true : false;
  }

  isEmpty() {
    if (this.collection.length === 0) {
      return true;
    }
    return false;
  }
  getType() {
    return this.isMinPriorityQueue ? queueTypes.MIN : queueTypes.MAX;
  }

  //O(n)
  enqueue(item) {
    if (this.isEmpty()) {
      this.collection.push(item);
      return true;
    }

    for (let i = 0; i < this.collection.length; i++) {
      let targetIndex = -1;
      let isLessThan = item.getPriority() < this.collection[i].getPriority();

      // Min Priority Queue
      if (this.isMinPriorityQueue && isLessThan) {
        targetIndex = i;
      }

      // Max Priority Queue
      else if (!this.isMinPriorityQueue && !isLessThan) {
        targetIndex = i;
      }

      if (targetIndex > -1) {
        this.collection.splice(i, 0, item);
        return true;
      }
    }
    this.collection.push(item);
    return true;
  }

  // O(1)
  dequeue() {
    let dequeuedItem = collection.shift();
    return dequeuedItem;
  }

  print() {
    console.dir(this.collection);
  }
}

// TESTING

const car = new QueueItem("Mercedes", 3);
const book = new QueueItem("Rich Dad, Poor Dad", 5);
const house = new QueueItem("Bungalow", 1);
const clothes = new QueueItem("Designers", 3);

const minPriorityQueue = new PriorityQueue(queueTypes.MIN);

minPriorityQueue.enqueue(car);
minPriorityQueue.enqueue(book);
minPriorityQueue.enqueue(house);
minPriorityQueue.enqueue(clothes);

minPriorityQueue.print();
// [
//      { value: 'Bungalow', priority: 1 },
//      { value: 'Mercedes', priority: 3 },
//      { value: 'Designers', priority: 3 },
//      { value: 'Rich Dad, Poor Dad', priority: 5 }
//   ]

const maxPriorityQueue = new PriorityQueue(queueTypes.MAX);

maxPriorityQueue.enqueue(car);
maxPriorityQueue.enqueue(book);
maxPriorityQueue.enqueue(house);
maxPriorityQueue.enqueue(clothes);

maxPriorityQueue.print();

// [
//      { value: 'Rich Dad, Poor Dad', priority: 5 },
//      { value: 'Designers', priority: 3 },
//      { value: 'Mercedes', priority: 3 },
//      { value: 'Bungalow', priority: 1 }
//   ]
