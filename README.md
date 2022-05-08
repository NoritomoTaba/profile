# cat2koban.dev

```shell
docker run --rm --volume "$(pwd):/data" --user $(id -u):$(id -g) pandoc/core index.md -o index.html
```
