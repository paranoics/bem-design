block('tool')(
  tag()('a'),
  attrs()(function() {
      return { href: this.ctx.url };
  })
);

block('tool__title')(
  mix()({ block : 'text', mods : { view : 'inverse', weight : 'semibold', size : 'l' } })
);
