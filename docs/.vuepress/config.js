module.exports = {
    title: 'J1nvey',
    description: '',
    base: '/repo/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
        search: false,
        nav: [
            {
                text: 'VUE',
                items: [
                    { text: 'a1', link: '/pages/test/test1'},
                    { text: 'a2', link: '/pages/test/test3'}
                ]
            }
        ],
        sidebar: {
            '/pages/test/': [
                {
                    title: '测试菜单1',
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠
                    children: [
                        ['test1', '子菜单1']
                    ]
                }
            ]
        }
    }
}