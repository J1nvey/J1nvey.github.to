## 父子组件通信

### - props $emit $on

子组件使用props来接收父组件绑定的数据
```js
    props: {
        data: {
            type: String,
            default: 'String',
            validator (val) {
                return xxx;
            }
        }
    },
```
子组件使用$emit来通知父组件更新数据
```js
    // 父组件
    <son @update:data="data = $event" :data="data"></son>
    // <father @data="data = $event"></father>
    // <father @data="changeDataMethod"></father>
    // 也可以使用.sync修饰符来简写
    // <father :data.sync='data'></father>

    // 子组件
    methods: {
        changeFatherData () {
            this.$emit('update:data', 'new data');
            // this.$emit('data', 'new data');
        }
    }
```
### - $parent $children $root
### - ref

## 隔代组件通信

### - 公共父组件传递
### - eventBus
### - vuex
### - localStorage

## 兄弟组件通信

### - provide/inject
### - $attr/$listeners (inheritAttrs: false)
