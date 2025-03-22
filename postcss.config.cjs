module.exports = {
  plugins: [
    require('autoprefixer')(),
    // require('postcss-import')(),
    //   require('postcss-modules')({
    //     generateScopedName: name => {
    //       return convertToCamelCase(name); // Вызываем функцию преобразования
    //     },
    //     filter: filename => {
    //       // Преобразовывать только файлы, оканчивающиеся на .model.scss
    //       return filename.endsWith('.model.scss');
    //     },
    //   }),
  ],
};

// function convertToCamelCase(name) {
//   return name
//     .replace(/__([a-z])/g, (_, char) => char.toUpperCase()) // Элемент в camelCase
//     .replace(/--([a-z])/g, (_, char) => char.toUpperCase()) // Модификатор в camelCase
//     .replace(/-([a-z])/g, (_, char) => char.toUpperCase()); // Преобразуем обычные дефисы
// }
