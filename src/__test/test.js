import { healthIndicator } from '../hw1';

test('health state-1', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };
  const result = healthIndicator(character);
  expect(result).toBe('healthy');
});

test('health state-2', () => {
  const character = {
    name: 'Воин',
    health: 10,
  };
  const result = healthIndicator(character);
  expect(result).toBe('critical');
});

test('health state-3', () => {
  const character = {
    name: 'Бард',
    health: 35,
  };
  const result = healthIndicator(character);
  expect(result).toBe('wounded');
});
