import Unit from '../../index';

test('проверяем уровень здоровья мечника', () => {
  const warrior = new Unit('мечник', '10');
  const healthLevel = warrior.status();
  expect(healthLevel).toBe('critical');
});

test('проверяем уровень здоровья мага', () => {
  const wizard = new Unit('маг', '49');
  const healthLevel = wizard.status();
  expect(healthLevel).toBe('wounded');
});

test('проверяем уровень здоровья лучника', () => {
  const necromancer = new Unit('лучник', '51');
  const healthLevel = necromancer.status();
  expect(healthLevel).toBe('healthy');
});