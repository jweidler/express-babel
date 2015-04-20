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

router.get('/', function(req, res) {
    Content.find({}, function(err, contents) {
        var stack = [];
        contents.forEach(function(content) {
            stack.push(content);
        });
        while (stack.length > 0) {
            var currentNode = stack.pop();
            if (currentNode.children && currentNode.children.length > 0) {
                currentNode.children.forEach(function(childId, idx) {
                    if (typeof childId.children === 'undefined') {
                        var childContent = _.find(contents, { '_id': childId });
                        currentNode.children[idx] = childContent;
                        if (childContent.children && childContent.children.length > 0) {
                            stack.push(childContent);
                        }
                    }
                });
            }
        }
        res.send(contents);
    });
});

router.get('/:id', function(req, res) {
    Content.find({}, function(err, contents) {
        var id = req.params.id;
        var stack = [];
        Content.findById(id, function(err, doc) {
            stack.push(doc);
            while (stack.length > 0) {
                var currentNode = stack.pop();
                if (currentNode.children && currentNode.children.length > 0) {
                    currentNode.children.forEach(function(childId, idx) {
                        if (typeof childId.children === 'undefined') {
                            var childContent = _.find(contents, { '_id': childId });
                            currentNode.children[idx] = childContent;
                            if (childContent.children && childContent.children.length > 0) {
                                stack.push(childContent);
                            }
                        }
                    });
                }
            }
            res.send(doc);
        });
    });
});

export default router;
