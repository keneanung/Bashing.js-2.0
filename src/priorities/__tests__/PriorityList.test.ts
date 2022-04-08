import { PriorityList } from "../PriorityList";

test('Should return an empty list on creation', () => {
  const list = new PriorityList();
  expect(list.AsArray().length).toBe(0);
})

test('Should return the priorities in the same order as received', () => {
  const list = new PriorityList(['foo', 'bar', 'baz']);
  expect(list.AsArray()).toEqual(['foo', 'bar', 'baz']);
})

test('Should return the priority of a given element', () => {
  const list = new PriorityList(['foo', 'bar', 'baz']);
  expect(list.PriorityOf('bar')).toBe(1);
})

test('Should allow appending an item to the empty list', () => {
  const list = new PriorityList([]);
  list.Append('qux');
  expect(list.AsArray()).toEqual([ 'qux' ]);
})

test('Should allow appending an item to the list', () => {
  const list = new PriorityList(['foo', 'bar', 'baz']);
  list.Append('qux');
  expect(list.AsArray()).toEqual(['foo', 'bar', 'baz', 'qux']);
})

test('Should give the appended item the correct priority', () => {
  const list = new PriorityList(['foo', 'bar', 'baz']);
  list.Append('qux');
  expect(list.PriorityOf('qux')).toBe(3);
})