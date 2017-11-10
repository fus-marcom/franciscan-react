## Contribution

Require NODE > 8

### Getting started

```sh
> git clone https://github.com/fus-marcom/franciscan-react.git
> cd franciscan-react
> yarn install
> yarn develop
```

1. Use `yarn` package manager as we have used yarn to scaffolde the app. See https://yarnpkg.com
2. Make a separate branch per feature added or bug fixed. Make a different PR for each so that we can track history better.
3. **DO NOT COMMIT CHANGES THAT BREAKS THE RENDER**
4. No uncessary discussion about style guide. Always run precommit hook as prettier and eslint can format. You can add them to you editor as well. You can code in your own style and prettier and eslint will change it to standerd JS style which is our requirement. 
5. Open a new issue for a new feature so that we may add it to our kanban board.
6. Keep you commit messages meaningful
7. Running tests before commit is recommended
8. Do not commit package-lock.json as we are using yarn.lock
9. Keep you environment vars in .env file. If you add any .env file make sure to add the entities in a .env.sample file for the repo.
10. Keep  you master branch up to date as to avoid merge conflicts
11. Happy coding!!
