import express from 'express';
const router = express.Router();
import yaml from 'js-yaml';
import fs from 'fs';

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// Mock
router.get('/api/layout-scopes/page-mock', function(req, res, next) {
  res.send(
      yaml.safeLoad(fs.readFileSync('build/routes/layout-scope-mock.yml', 'utf8'))
  );
});

export default router;
