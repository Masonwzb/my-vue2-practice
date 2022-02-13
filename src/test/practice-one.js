import { Subject, Observer } from './handwritten/observerMode';

export function testFrontend() {
    // 测试
    let s = new Subject();
    new Observer('o1', s);
    new Observer('02', s);
    s.setState(15);
}