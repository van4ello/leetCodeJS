class EventEmitter {

  constructor() {
    this.events = new Map();
  }

  subscribe(event, cb) {
    if (this.events.has(event)) {
      this.events.get(event).push(cb);
    } else {
      this.events.set(event, [cb]);
    }
    return {
        unsubscribe: () => {
          if (this.events.has(event)) {
            if (this.events.get(event).length === 0) {
              this.events.delete(event);
            } else {
              const cbIndex = this.events.get(event).indexOf(cb);
              if (cbIndex > -1)
                this.events.get(event).splice(cbIndex, 1);
            }
          }
        }
    };
  }

  emit(event, args = []) {
    if (!this.events.has(event)) return [];

    return this.events.get(event).map(cb => cb.apply(this, args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */