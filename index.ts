import { FinalClass } from './final.decorator';

@FinalClass
class SuperClass {}

const superClass = new SuperClass();

class ChildClass extends SuperClass {}

const childClass = new ChildClass();
