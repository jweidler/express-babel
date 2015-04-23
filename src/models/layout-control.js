
import restful from 'node-restful';
const mongoose = restful.mongoose;

const LayoutControl = mongoose.Schema({
    findQuery: {
        type: Object,
        required: true
    },
    behavior: {
        type: Object,
        required: false
    }
});

export default LayoutControl;
