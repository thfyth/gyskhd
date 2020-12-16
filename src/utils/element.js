// 导入自己需要的组件
import {
    Select,
    Option,
    OptionGroup,
    Input,
    Tree,
    Dialog,
    Row,
    Col,
    Button,
    Loading,
    MessageBox,
    Message,
    Table,
    TableColumn,
    Steps,
    Step,
    Checkbox,
    Form,
    FormItem,
    Menu,
    MenuItem,
    Timeline,
    TimelineItem
} from 'element-ui'
const element = {
    install: function (Vue) {
        Vue.use(Select)
        Vue.use(Option)
        Vue.use(OptionGroup)
        Vue.use(Input)
        Vue.use(Tree)
        Vue.use(Dialog)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Button)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Loading)
        Vue.use(Steps)
        Vue.use(Step) 
        Vue.use(Checkbox) 
        Vue.use(Form) 
        Vue.use(FormItem)
        Vue.use(Menu) 
        Vue.use(MenuItem)
        Vue.use(Timeline)
        Vue.use(TimelineItem)
        
        Vue.component(Message.name, Message);
        Vue.component(MessageBox.name, MessageBox);
        Vue.prototype.$loading = Loading.service;
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$prompt = MessageBox.prompt;
        Vue.prototype.$message = Message;
    }
}
export default element