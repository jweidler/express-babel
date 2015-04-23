
import restful from 'node-restful';
const mongoose = restful.mongoose;

const ContentSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: false
    },
    meta: {
        type: Object,
        required: false
    },
    children: {
        type: [ContentSchema],
        required: false
    }
});

export default ContentSchema;

//const pageLayoutScope = {
//    _id: 1,
//    type: "page",
//    behaviors: {
//        layout: [
//            {
//                name: "stripify",
//                config: {
//
//                }
//            }
//        ],
//        style: [
//
//        ]
//    },
//    children: [
//        {
//            _id: 2,
//            type: "ImageCollection",
//            children: [
//
//            ]
//        }
//    ]
//};
//
//const pageContents = {
//    _id: 1,
//    type: "Page",
//    children: [
//        {
//            _id: 2,
//            type: "ImageCollection",
//            children: [
//                {
//                    _id: 3,
//                    type: "Image",
//                    data: {
//                        src: "image1.jpg",
//                        caption: "Image 1"
//                    }
//                },
//                {
//                    _id: 4,
//                    type: "Image",
//                    data: {
//                        src: "image2.jpg",
//                        caption: "Image 2"
//                    }
//                },
//                {
//                    _id: 5,
//                    type: "Image",
//                    data: {
//                        src: "image3.jpg",
//                        caption: "Image 3"
//                    }
//                }
//            ]
//        },
//        {
//            _id: 6,
//            type: "Article",
//            children: [
//                {
//                    _id: 7,
//                    type: "Headline",
//                    data: "A Headline"
//                },
//                {
//                    _id: 8,
//                    type: "Paragraph",
//                    data: "Lorem ipsum"
//                },
//                {
//                    _id: 9,
//                    type: "Paragraph",
//                    data: "<i>Lorem ipsum</i>"
//                }
//            ]
//        }
//    ]
//};
