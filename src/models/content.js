
import restful from 'node-restful';
const mongoose = restful.mongoose;

const ContentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    children: {
        type: [ContentSchema],
        required: false
    }
});

export default ContentSchema;

const article = {
    type: "Article",
    children: [
        {
            type: "Headline",
            data: "A headline"
        },
        {
            type: "Paragraph",
            data: "Lorem ipsum"
        },
        {
            type: "Paragraph",
            data: "Lorem ipsum"
        }
    ]
};
