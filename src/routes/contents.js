import express from 'express';
const router = express.Router();
import restful from 'node-restful';
const mongoose = restful.mongoose;
import _ from 'lodash';

const contentSchema = mongoose.Schema({
    type: String,
    children: [mongoose.Schema.Types.ObjectId]
});

const Content = mongoose.model('Content', contentSchema);

function iterateChildren(stack, contents) {
    while (stack.length > 0) {
        let currentNode = stack.pop();
        if (currentNode.children && currentNode.children.length > 0) {
            currentNode.children.forEach(function(childId, idx) {
                if (typeof childId.children === 'undefined') {
                    let childContent = _.find(contents, { '_id': childId });
                    currentNode.children[idx] = childContent;
                    if (childContent.children && childContent.children.length > 0) {
                        stack.push(childContent);
                    }
                }
            });
        }
    }
    return stack;
}

router.get('/', function(req, res) {
    Content.find({}, function(err, contents) {
        let stack = [];
        contents.forEach(function(content) {
            stack.push(content);
        });
        stack = iterateChildren(stack, contents);
        res.send(contents);
    });
});

router.get('/:id', function(req, res) {
    Content.find({}, function(err, contents) {
        let id = req.params.id;
        let stack = [];
        Content.findById(id, function(err, doc) {
            stack.push(doc);
            stack = iterateChildren(stack, contents);
            res.send(doc);
        });
    });
});

export default router;
