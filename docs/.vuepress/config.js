module.exports = {
    title: 'J1nvey',
    description: '',
    base: '/repo/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
        search: false,
        sidebar: 'auto',
        nav: [
            {
                text: 'VUE',
                items: [
                    { text: '组件', link: '/pages/vue/component/communication'},
                ]
            }
        ],
        sidebar: {
            '/pages/vue/component/': [
                {
                    title: '组件',
                    collapsable: false, // false为默认展开菜单, 默认值true是折叠
                    children: [
                        ['communication', '组件通信']
                    ]
                }
            ]
        },
    },
    // 代码块显示行号
    markdown: {
        lineNumbers: true
    },
    lastUpdated: 'Last Updated',
}