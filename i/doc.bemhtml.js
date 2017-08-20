block('doc')(
  tag()('a'),
  attrs()(function() {
      return { href: this.ctx.url };
  })
);

block('doc__title')(
  mix()({ block : 'text', mods : { view : 'primary', weight : 'bold', size : 'l', indent : 'xs' } })
);

block('doc__description')(
  mix()({ block : 'text', mods : { view : 'primary', size : 'm', indent : 'xs' } })
);

block('doc__action')(
  mix()({ block : 'text', mods : { view : 'primary', size : 'm' } })
);

block('doc__action')(
  mix()({ block : 'text', mods : { view : 'primary', size : 'm' } })
);
