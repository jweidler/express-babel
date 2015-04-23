
import restful from 'node-restful';
import ContentSchema from './content';
const mongoose = restful.mongoose;

const LayoutScope = mongoose.Schema({
    contentType: {
        type: String,
        required: true
    },
    behavior: {
        type: Object,
        required: false
    },
    style: {
        type: Object,
        required: false
    },
    space: {
        type: Object,
        required: false
    },
    contents: [ContentSchema],
    children: [LayoutScope]
});

export default LayoutScope;
