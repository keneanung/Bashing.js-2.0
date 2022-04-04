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