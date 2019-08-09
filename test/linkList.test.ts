import { List } from '../linkList/linkList'
import 'mocha';
// import * as should from 'should';

describe('测试链表', function () {
  it('链表', function () {
    let ll = new List<string>('head')
    ll.insert('first', 'head')
    ll.insert('second', 'first')
    ll.insert('third', 'second')
    const prevRs = ll.find('second').element
    // should(prevRs).be.equal('second')
  })
})