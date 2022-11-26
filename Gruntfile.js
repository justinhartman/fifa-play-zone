/**
 * Gruntfile for release candidates.
 *
 * @author     Justin Hartman <code@justhart.com>
 * @copyright  Copyright (c) 2022 Justin Hartman <https://justhart.com>
 * @version    1.1.0
 */
module.exports = (grunt) => {
  grunt.loadNpmTasks('git-changelog');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-git');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: {
      options: {
        files: ['package.json', 'app.json'],
        updateConfigs: ['pkg', 'git_changelog'],
        commit: false,
        createTag: false,
        push: false,
        globalReplace: true,
        prereleaseName: false,
        metadata: '',
        regExp: false,
      },
    },
    git_changelog: {
      main: {
        options: {
          app_name: 'FIFA+ Play Zone Changelog',
          intro: 'This file contains the changelog details for revisions to the FIFA+ Play Zone.',
          branch: 'main',
          repo_url: 'https://github.com/justinhartman/fifa-play-zone',
          file: 'docs/tags/<%= pkg.version %>.md',
          template: 'docs/tags/templates/log_template.md',
          commit_template: 'docs/tags/templates/log_commit_template.md',
          sections: [
            {
              title: 'Breaking Changes',
              grep: '^break',
            },
            {
              title: 'New Features',
              grep: '^feat',
            },
            {
              title: 'Bug Fixes',
              grep: '^fix',
            },
            {
              title: 'Refactored Code',
              grep: '^refactor',
            },
            {
              title: 'Style Changes',
              grep: '^style',
            },
            {
              title: 'Core Updates',
              grep: '^chore',
            },
            {
              title: 'Testing',
              grep: '^test',
            },
            {
              title: 'Documentation',
              grep: '^docs',
            },
            {
              title: 'StyleCI Fixes',
              grep: '^Apply fixes from',
            },
            {
              title: 'Composer Updates',
              grep: '^composer',
            },
            {
              title: 'Node Package Updates',
              grep: '^npm',
            },
            {
              title: 'Branches Merged',
              grep: '^Merge branch',
            },
            {
              title: 'Pull Requests Merged',
              grep: '^Merge pull request',
            },
          ],
        },
      },
    },
    gitadd: {
      task: {
        files: {
          src: [
            'docs',
            'app.json',
            'package.json',
            'yarn.lock',
            'README.md',
          ],
        },
      },
    },
    gitcommit: {
      your_target: {
        options: {
          message: 'chore: Tag Version <%= pkg.version %>',
          description: 'Add files for tag <%= pkg.version %>.',
        },
      },
    },
    gittag: {
      addtag: {
        options: {
          tag: '<%= pkg.version %>',
          message: 'chore(release): Release Version <%= pkg.version %>',
        },
      },
    },
    gitpush: {
      your_target: {
        options: {
          remote: 'origin',
          branch: 'main',
          tags: true,
        },
      },
    },
  });
  grunt.registerTask('bump-changelog', ['bump', 'git_changelog']);
  grunt.registerTask('publish', ['gitadd', 'gitcommit', 'gittag', 'gitpush']);
  grunt.registerTask('minor', ['bump:minor', 'git_changelog', 'publish']);
  grunt.registerTask('major', ['bump:major', 'git_changelog', 'publish']);
  grunt.registerTask('default', ['bump', 'git_changelog', 'publish']);
};
