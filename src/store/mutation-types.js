/**
 * mutation-type.js用来定义mutations的方法名,相当于java的常量类
 * 该js用来定义mutations的key键字符串
 * @type {string}
 */
import {withNameSpace} from './namespace'

const TEST_MUTATION_TYPE = 'test_mutation_type'
const TEST_MUTATION_TYPE2 = 'test_mutation_type2'
const TEST_INCREMENT = 'increment'
const TEST_CHANGEIDNEX = 'test_changeIndex'
const SAVE_MENUDATA = 'save_menuData'
const CHANGE_TABLIST = 'change_tablist'

const withMenuSpace = withNameSpace('menu')
const MENU = {
  MENU_SET_HEADER: withMenuSpace('setMenuHeader') // '/menu/setMenuHeader'
}

export default {
  MENU,
  TEST_MUTATION_TYPE,
  TEST_MUTATION_TYPE2,
  TEST_INCREMENT,
  TEST_CHANGEIDNEX,
  SAVE_MENUDATA,
  CHANGE_TABLIST
}
