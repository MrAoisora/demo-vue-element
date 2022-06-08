export function getMenuUrl (menuId, menus) {
  // eslint-disable-next-line no-unused-vars
  for (const menu of menus) {
    if (menu.id === menuId) {
      console.log('找到的菜单为:', menu.url)
      return menu.url
    }
    if (menu.children && menu.children.length) {
      // 如果这个菜单下还有子菜单则递归继续遍历菜单
      // eslint-disable-next-line no-unused-vars
      const url = getMenuUrl(menuId, menu.children)
      if (url) {
        return url
      }
    }
  }
  return null
}

/**
 * 根据菜单id递归遍历报文，返回指定的menu对象
 * @param menuId
 */
export function gotoSearch (menuId, menus) {
  // eslint-disable-next-line no-unused-vars
  for (const menu of menus) {
    if (menu.id === menuId) {
      console.log('找到的菜单为:', menu)
      return menu
    }
    if (menu.children && menu.children.length) {
      // 如果这个菜单下还有子菜单则递归继续遍历菜单
      // eslint-disable-next-line no-unused-vars
      const menuObj = this.gotoSearch(menuId, menu.children)
      if (menuObj) {
        return menuObj
      }
    }
  }
  return null
}

export function addNextMenu (menuId) {
  console.log('增加前的菜单:', this.$store.state.menuData)
  const menuItem = this.gotoSearch(menuId, this.$store.state.menuData)
  if (menuItem.children.length === 0) { // 如果该menuItem.children.length
    console.log('开始请求接口获取该菜单下的子菜单并将菜单存入menuData中....')
    menuItem.children.push({
      'id': 'S001',
      'name': '三级菜单02',
      'itemFlag': '1',
      'url': 'http://www.bilibili.com',
      'children': []
    })
  }
  console.log('增加后的菜单:', this.$store.state.menuData)
}
