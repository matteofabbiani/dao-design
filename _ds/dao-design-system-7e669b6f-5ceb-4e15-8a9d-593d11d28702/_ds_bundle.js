/* @ds-bundle: {"format":4,"namespace":"DaoDesignSystem_7e669b","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ImageFrame","sourcePath":"components/core/ImageFrame.jsx"},{"name":"PaperGround","sourcePath":"components/core/PaperGround.jsx"},{"name":"Rule","sourcePath":"components/core/Rule.jsx"},{"name":"FactRow","sourcePath":"components/editorial/FactRow.jsx"},{"name":"BookingStep","sourcePath":"components/forms/BookingStep.jsx"},{"name":"ChoiceGroup","sourcePath":"components/forms/ChoiceGroup.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"NextDateTooltip","sourcePath":"components/navigation/NextDateTooltip.jsx"}],"sourceHashes":{"components/core/Button.jsx":"fc9e30ee8759","components/core/ImageFrame.jsx":"fea4189c4e20","components/core/PaperGround.jsx":"348fa870e64f","components/core/Rule.jsx":"11b6982480ce","components/editorial/FactRow.jsx":"4f831c6df0bc","components/forms/BookingStep.jsx":"fb4e214162cf","components/forms/ChoiceGroup.jsx":"aeab65993efc","components/forms/TextField.jsx":"af16740fc0a5","components/navigation/NavBar.jsx":"76af3ce3d0a8","components/navigation/NextDateTooltip.jsx":"9b415ba86c38","ui_kits/website/App.jsx":"80c350f0ef34","ui_kits/website/EveningScreen.jsx":"ae7119831bc0","ui_kits/website/HomeScreen.jsx":"8dec8c646dcd","ui_kits/website/ReserveScreen.jsx":"645861608eff","ui_kits/website/Shared.jsx":"67219e770be5","ui_kits/website/StoryScreen.jsx":"2ad97124e32f","ui_kits/website/home-structures/Structures.jsx":"02805501e60a","ui_kits/website/home-structures/Structures2.jsx":"10a6b9e30be2","ui_kits/website/home-structures/Structures3.jsx":"8840d4039460"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DaoDesignSystem_7e669b = window.DaoDesignSystem_7e669b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const btnBase = {
  font: '500 12px/1 var(--font-body)',
  letterSpacing: '.22em',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  background: 'none',
  border: 0,
  padding: 0,
  cursor: 'pointer',
  display: 'inline-flex',
  flexDirection: 'column',
  gap: 12,
  alignItems: 'flex-start',
  transition: 'color var(--dur-hover) var(--ease-out),opacity var(--dur-hover) var(--ease-out)'
};
function Button({
  children,
  variant = 'rule',
  tone = 'ink',
  ruleWidth = 148,
  disabled = false,
  onClick,
  as = 'button',
  href
}) {
  const color = tone === 'cream' ? 'var(--ink-on-image)' : 'var(--ink)';
  const ruleColor = tone === 'cream' ? 'var(--rule-on-image)' : 'var(--ink)';
  const Tag = as === 'a' ? 'a' : 'button';
  const common = {
    onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    href: Tag === 'a' ? href : undefined
  };
  if (variant === 'block') {
    const fill = tone === 'cream' ? 'var(--ink-on-image)' : 'var(--ink)';
    const text = tone === 'cream' ? 'var(--ink-warm)' : 'var(--paper)';
    return React.createElement(Tag, {
      ...common,
      style: {
        ...btnBase,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: fill,
        color: text,
        padding: '18px 32px',
        opacity: disabled ? .35 : 1,
        textDecoration: 'none',
        borderBottom: 0
      }
    }, children);
  }
  if (variant === 'line') {
    return React.createElement(Tag, {
      ...common,
      style: {
        ...btnBase,
        flexDirection: 'row',
        color,
        opacity: disabled ? .35 : 1,
        borderBottom: '1px solid ' + (tone === 'cream' ? 'var(--rule-on-image)' : 'var(--rule)'),
        paddingBottom: 6,
        textDecoration: 'none'
      }
    }, children);
  }
  return React.createElement(Tag, {
    ...common,
    style: {
      ...btnBase,
      color,
      opacity: disabled ? .35 : 1,
      textDecoration: 'none',
      borderBottom: 0
    }
  }, React.createElement('span', null, children), React.createElement('span', {
    style: {
      display: 'block',
      width: ruleWidth,
      height: 1,
      background: ruleColor
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ImageFrame.jsx
try { (() => {
function ImageFrame({
  src,
  alt = '',
  ratio = '3 / 2',
  scrim = 'none',
  caption,
  height,
  width = '100%',
  objectPosition = 'center',
  children
}) {
  const layers = [];
  if (scrim === 'floor' || scrim === 'both') {
    layers.push(React.createElement('span', {
      key: 'f',
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--scrim-floor)'
      }
    }));
  }
  if (scrim === 'band' || scrim === 'both') {
    layers.push(React.createElement('span', {
      key: 'b',
      style: {
        position: 'absolute',
        inset: 0,
        background: 'var(--scrim-band)'
      }
    }));
  }
  return React.createElement('figure', {
    style: {
      margin: 0,
      width
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: height ? undefined : ratio,
      height
    }
  }, React.createElement('img', {
    src,
    alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition,
      display: 'block'
    }
  }), layers, children ? React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, children) : null), caption ? React.createElement('figcaption', {
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: '1px solid var(--rule)',
      font: '400 12px/1.5 var(--font-body)',
      color: 'var(--ink-2)',
      maxWidth: 421
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { ImageFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ImageFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/PaperGround.jsx
try { (() => {
function PaperGround({
  theme = 'light',
  children,
  style,
  as = 'div'
}) {
  return React.createElement(as, {
    'data-theme': theme === 'dark' ? 'dark' : undefined,
    style: {
      position: 'relative',
      background: 'var(--ground)',
      color: 'var(--ink)',
      ...style
    }
  }, React.createElement('span', {
    'aria-hidden': true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'var(--grain-image)',
      backgroundSize: 'var(--grain-size)',
      backgroundPosition: 'top center',
      backgroundRepeat: 'var(--grain-repeat)',
      mixBlendMode: theme === 'dark' ? 'var(--grain-blend-dark)' : 'var(--grain-blend)',
      opacity: theme === 'dark' ? 'var(--grain-opacity-dark)' : 'var(--grain-opacity)'
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { PaperGround });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PaperGround.jsx", error: String((e && e.message) || e) }); }

// components/core/Rule.jsx
try { (() => {
function Rule({
  tone = 'rule',
  width = '100%',
  vertical = false,
  inset = 0
}) {
  const c = tone === 'faint' ? 'var(--rule-faint)' : tone === 'ink' ? 'var(--ink)' : tone === 'image' ? 'var(--rule-on-image)' : 'var(--rule)';
  return React.createElement('span', {
    style: vertical ? {
      display: 'block',
      width: 1,
      height: width,
      background: c,
      marginInline: inset
    } : {
      display: 'block',
      height: 1,
      width,
      background: c,
      marginBlock: inset
    }
  });
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rule.jsx", error: String((e && e.message) || e) }); }

// components/editorial/FactRow.jsx
try { (() => {
function FactRow({
  label,
  value,
  note,
  tone = 'rule'
}) {
  return React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '200px minmax(0,1fr)',
      gap: '0 24px',
      padding: '14px 0',
      borderTop: '1px solid ' + (tone === 'faint' ? 'var(--rule-faint)' : 'var(--rule)')
    }
  }, React.createElement('div', {
    style: {
      font: '400 12px/1.5 var(--font-body)',
      color: 'var(--ink-3)'
    }
  }, label), React.createElement('div', null, React.createElement('div', {
    style: {
      font: '400 13px/1.5 var(--font-body)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--ink)'
    }
  }, value), note ? React.createElement('div', {
    style: {
      font: '400 12px/1.5 var(--font-body)',
      color: 'var(--ink-2)',
      marginTop: 5,
      maxWidth: '65ch'
    }
  }, note) : null));
}
Object.assign(__ds_scope, { FactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/FactRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/BookingStep.jsx
try { (() => {
function BookingStep({
  question,
  help,
  step,
  total,
  children,
  tone = 'ink'
}) {
  const cream = tone === 'cream';
  return React.createElement('div', {
    style: {
      maxWidth: 644
    }
  }, React.createElement('h2', {
    style: {
      font: '300 40px/1.1 var(--font-display)',
      letterSpacing: '-.01em',
      color: cream ? 'var(--ink-on-image)' : 'var(--ink)',
      margin: 0
    }
  }, question), help ? React.createElement('p', {
    style: {
      marginTop: 16,
      font: '400 16px/1.55 var(--font-body)',
      color: 'var(--ink-2)',
      maxWidth: '65ch'
    }
  }, help) : null, React.createElement('div', {
    style: {
      marginTop: 40
    }
  }, children), step && total ? React.createElement('div', {
    style: {
      marginTop: 48,
      paddingTop: 14,
      borderTop: '1px solid var(--rule)',
      font: '500 10px/1 var(--font-body)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, 'Question ' + step + ' of ' + total) : null);
}
Object.assign(__ds_scope, { BookingStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/BookingStep.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChoiceGroup.jsx
try { (() => {
function ChoiceGroup({
  options = [],
  value,
  onChange,
  columns,
  label
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return React.createElement('div', null, label ? React.createElement('span', {
    style: {
      display: 'block',
      font: '500 10px/1 var(--font-body)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 16
    }
  }, label) : null, React.createElement('div', {
    style: columns ? {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))',
      gap: 0,
      borderTop: '1px solid var(--rule)'
    } : {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 0,
      borderTop: '1px solid var(--rule)'
    }
  }, opts.map(o => {
    const on = value === o.value;
    return React.createElement('button', {
      key: o.value,
      onClick: () => onChange && onChange(o.value),
      style: {
        background: on ? 'var(--ink)' : 'transparent',
        color: on ? 'var(--paper)' : 'var(--ink)',
        border: 0,
        borderBottom: '1px solid var(--rule)',
        borderRight: '1px solid var(--rule)',
        padding: '18px 20px',
        cursor: 'pointer',
        textAlign: 'left',
        minWidth: columns ? 0 : 96,
        font: '400 16px/1.4 var(--font-body)',
        fontVariantNumeric: 'tabular-nums',
        transition: 'background var(--dur-hover) var(--ease-out),color var(--dur-hover) var(--ease-out)'
      }
    }, o.label);
  })));
}
Object.assign(__ds_scope, { ChoiceGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChoiceGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline = false,
  note
}) {
  const shared = {
    width: '100%',
    background: 'transparent',
    border: 0,
    borderBottom: '1px solid var(--rule)',
    padding: '10px 0',
    font: '400 20px/1.4 var(--font-body)',
    color: 'var(--ink)',
    outline: 'none',
    transition: 'border-color var(--dur-hover) var(--ease-out)'
  };
  return React.createElement('label', {
    style: {
      display: 'block',
      maxWidth: 533
    }
  }, label ? React.createElement('span', {
    style: {
      display: 'block',
      font: '500 10px/1 var(--font-body)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      marginBottom: 14
    }
  }, label) : null, multiline ? React.createElement('textarea', {
    value,
    placeholder,
    rows: 3,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      ...shared,
      resize: 'none',
      fontSize: 16,
      lineHeight: 1.55
    }
  }) : React.createElement('input', {
    type,
    value,
    placeholder,
    onChange: e => onChange && onChange(e.target.value),
    style: shared
  }), note ? React.createElement('span', {
    style: {
      display: 'block',
      marginTop: 10,
      font: '400 12px/1.5 var(--font-body)',
      color: 'var(--ink-2)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NextDateTooltip.jsx
try { (() => {
function NextDateTooltip({
  children,
  label = 'Next seats, 14 October',
  tone = 'ink',
  disabled = false
}) {
  const [p, setP] = React.useState(null);
  const cream = tone === 'cream';
  const move = e => setP({
    x: e.clientX,
    y: e.clientY
  });
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      position: 'relative'
    },
    onMouseEnter: disabled ? undefined : move,
    onMouseMove: disabled ? undefined : move,
    onMouseLeave: () => setP(null)
  }, children, p ? React.createElement('span', {
    style: {
      position: 'fixed',
      left: p.x + 16,
      top: p.y + 14,
      pointerEvents: 'none',
      zIndex: 60,
      font: '500 10px/1 var(--font-body)',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      padding: '9px 12px',
      background: cream ? 'rgba(247,244,236,.94)' : 'rgba(26,24,21,.94)',
      color: cream ? 'var(--ink-warm)' : 'var(--paper)',
      transition: 'opacity var(--dur-hover) var(--ease-out)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { NextDateTooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NextDateTooltip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  tone = 'ink',
  active,
  onNavigate,
  markAlign = 'left',
  nextDate = 'Next seats, 14 October',
  logoSrc
}) {
  const cream = tone === 'cream';
  const ink = cream ? 'var(--ink-on-image)' : 'var(--ink)';
  const meta = cream ? 'var(--meta-on-image)' : 'var(--ink-3)';
  const links = [['story', 'Story'], ['evening', 'Evening'], ['reserve', 'Reserve']];
  const label = {
    font: '500 10px/1 var(--font-body)',
    letterSpacing: '.22em',
    textTransform: 'uppercase',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    padding: 0,
    transition: 'color var(--dur-hover) var(--ease-out)'
  };
  const mark = React.createElement('button', {
    onClick: () => onNavigate && onNavigate('home'),
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      lineHeight: 0
    }
  }, logoSrc ? React.createElement('img', {
    src: logoSrc,
    alt: 'Dao',
    style: {
      width: 74,
      height: 35,
      display: 'block'
    }
  }) : React.createElement('span', {
    style: {
      font: '300 26px/1 var(--font-display)',
      letterSpacing: '-.01em',
      color: ink
    }
  }, 'dao'));
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: markAlign === 'center' ? 'center' : 'space-between',
      gap: markAlign === 'center' ? 48 : 0,
      padding: '28px 64px',
      position: 'relative'
    }
  }, markAlign === 'center' ? null : mark, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 40
    }
  }, markAlign === 'center' ? mark : null, links.map(([k, l]) => k === 'reserve' ? React.createElement(__ds_scope.NextDateTooltip, {
    key: k,
    label: nextDate,
    tone: tone
  }, React.createElement('button', {
    onClick: () => onNavigate && onNavigate(k),
    style: {
      ...label,
      color: active === k ? ink : ink
    }
  }, l)) : React.createElement('button', {
    key: k,
    onClick: () => onNavigate && onNavigate(k),
    style: {
      ...label,
      color: active === k ? ink : meta
    }
  }, l))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const [route, setRoute] = React.useState('home');
  const go = r => {
    setRoute(r);
    window.scrollTo(0, 0);
  };
  const S = {
    home: window.HomeScreen,
    story: window.StoryScreen,
    evening: window.EveningScreen,
    reserve: window.ReserveScreen
  }[route];
  return /*#__PURE__*/React.createElement(S, {
    onNavigate: go
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EveningScreen.jsx
try { (() => {
function EveningScreen({
  onNavigate
}) {
  const {
    NavBar,
    ImageFrame,
    PaperGround,
    Button
  } = window.DaoDesignSystem_7e669b;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    active: "evening",
    logoSrc: LOGO_BLACK,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 96,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 9'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: daoType.d96
  }, "Everyone starts", /*#__PURE__*/React.createElement("br", null), "at the same time")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / 13',
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.small,
      color: 'var(--ink-2)'
    }
  }, "The format and the menu are the same thing. One arrival, one table, a fixed sequence adapted per seat.")))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      rowGap: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: daoType.d40
  }, "The shared table,", /*#__PURE__*/React.createElement("br", null), "without apology"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)',
      marginTop: 20
    }
  }, "You will be seated with people you have not met. The first fifteen minutes can be quiet. Then Nir comes out, introduces the evening, and the table stops being a room full of strangers.")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '7 / 13'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: P + 'set-table-00997.jpg',
    height: 440,
    caption: "The table, set, before the first seat is taken."
  })))), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark",
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, {
    style: {
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 7'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, "The menu is not", /*#__PURE__*/React.createElement("br", null), "published in advance")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / 12',
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)'
    }
  }, "Enough is shown to demonstrate what the kitchen does. Not enough to spoil the evening. Dishes change with what the suppliers bring."))), /*#__PURE__*/React.createElement(Grid, {
    style: {
      rowGap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: P + 'dish-slate-00787.jpg',
    height: 380
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '6 / 10'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: P + 'plating-hands-00682.jpg',
    height: 380
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '10 / 13',
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.small,
      color: 'var(--ink-2)'
    }
  }, "Dietary needs are taken at booking and handled seat by seat. The sequence keeps its shape."))), /*#__PURE__*/React.createElement(Grid, {
    style: {
      paddingTop: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 5'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d32,
      color: 'var(--ink)'
    }
  }, "Wine pairing"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)',
      marginTop: 16
    }
  }, "One pairing, fixed price, poured through the meal. There is no cocktail bar. That is a choice, not an omission."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      font: '400 13px/1.5 var(--font-body)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--ink)'
    }
  }, "THB 2,200 per guest")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '6 / 10'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d32,
      color: 'var(--ink)'
    }
  }, "Music"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)',
      marginTop: 16
    }
  }, "The room shifts with the courses. It opens quiet and ends louder than it started.")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '11 / 13',
      alignSelf: 'end',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "cream",
    ruleWidth: 110,
    onClick: () => onNavigate('reserve')
  }, "Reserve"))))), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: onNavigate
  }));
}
window.EveningScreen = EveningScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EveningScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function HomeScreen({
  onNavigate
}) {
  const {
    NavBar,
    Button,
    ImageFrame,
    PaperGround
  } = window.DaoDesignSystem_7e669b;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 860,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'nir-plating-01034.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-floor)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-band)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    tone: "cream",
    active: "home",
    logoSrc: LOGO_WHITE,
    onNavigate: onNavigate
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 700,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...daoType.d64,
      color: 'var(--ink-on-image)',
      textAlign: 'center'
    }
  }, "Dinner as a journey,", /*#__PURE__*/React.createElement("br", null), "a sixteen-seat chef\u2019s table"), /*#__PURE__*/React.createElement(Button, {
    tone: "cream",
    onClick: () => onNavigate('reserve')
  }, "Reserve a seat"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 64,
      bottom: 36,
      zIndex: 2,
      ...daoType.meta,
      color: 'var(--meta-on-image)'
    }
  }, "Koh Phangan")), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 7'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: daoType.d56
  }, "One table, sixteen seats,", /*#__PURE__*/React.createElement("br", null), "one arrival time, one menu")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / 12'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)'
    }
  }, "Everyone arrives at 18:30 and eats the same menu, adapted seat by seat. Thai produce and Thai suppliers, cooked the way Nir Mesika learned to cook in Israel and Morocco. Wine pairing is the only drinks option."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 24px'
    }
  }, [['Arrival', '18:30'], ['Duration', 'About 3 hours'], ['Seats', '16'], ['Menu', 'THB 3,900']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: '12px 0',
      borderTop: '1px solid var(--rule-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...daoType.small,
      color: 'var(--ink-3)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.5 var(--font-body)',
      fontVariantNumeric: 'tabular-nums',
      marginTop: 3
    }
  }, v))))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      rowGap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 5'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: P + 'foraging-00497.jpg',
    height: 320,
    caption: "Sourcing and foraging, before service."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '5 / 9'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: P + 'prep-overhead-0112.jpg',
    height: 320
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / 13'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: P + 'ceramics-00808.jpg',
    height: 320,
    caption: "Plates made on the island."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6',
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: daoType.d40
  }, "The day is the first half of the evening"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)',
      marginTop: 20
    }
  }, "The market run, the foraging, the prep. None of it is visible at the table, and all of it is why the table works.")))), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark",
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'end',
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 7'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, "Then the room goes dark", /*#__PURE__*/React.createElement("br", null), "and the table starts")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / 12'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)'
    }
  }, "Nir comes out every evening, introduces himself and walks the table through the meal. Music shifts with the courses. Nobody is handed a menu.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1312,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'table-guests-01091.jpg',
    alt: "",
    style: {
      width: '100%',
      height: 620,
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: daoType.d40
  }, "Nir Mesika"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)',
      marginTop: 20
    }
  }, "Israel, then Tel Aviv and Milan, then two restaurants in New York, then this island. He grew up in a house where his grandmother raised nine children and the older ones cooked for the younger. The shared table is how he was fed."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line",
    onClick: () => onNavigate('story')
  }, "Read his story"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '7 / 13',
      marginRight: -64
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'nir-entrance-00849.jpg',
    alt: "",
    style: {
      width: '100%',
      height: 520,
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: onNavigate
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ReserveScreen.jsx
try { (() => {
function ReserveScreen({
  onNavigate
}) {
  const {
    NavBar,
    BookingStep,
    ChoiceGroup,
    TextField,
    Button,
    FactRow,
    PaperGround
  } = window.DaoDesignSystem_7e669b;
  const [step, setStep] = React.useState(1);
  const [seats, setSeats] = React.useState('2');
  const [date, setDate] = React.useState('');
  const [diet, setDiet] = React.useState('');
  const [occ, setOcc] = React.useState('');
  const [email, setEmail] = React.useState('');
  const total = 5;
  const [openQ, setOpenQ] = React.useState(0);
  const faq = [['Will I be seated with strangers?', 'One table, sixteen seats. Nir opens the evening for everyone at once, which is what breaks the first quiet fifteen minutes.'], ['Can the menu be adapted?', 'Yes, seat by seat. Tell us at booking and the sequence keeps its shape.'], ['Why is there no cocktail bar?', 'One wine pairing is poured through the meal. It is a choice about the evening, not a gap in the offer.'], ['How far ahead can I book?', 'Four months.'], ['Can I take the whole room?', 'Yes. A buyout of all sixteen seats is available. Ask by email.']];
  const next = () => setStep(s => Math.min(total + 1, s + 1));
  const back = () => setStep(s => Math.max(1, s - 1));
  const steps = {
    1: /*#__PURE__*/React.createElement(BookingStep, {
      step: 1,
      total: total,
      question: "How many seats?",
      help: "Sixteen seats at one table. Parties of one to eight."
    }, /*#__PURE__*/React.createElement(ChoiceGroup, {
      columns: 8,
      value: seats,
      onChange: setSeats,
      options: ['1', '2', '3', '4', '5', '6', '7', '8']
    })),
    2: /*#__PURE__*/React.createElement(BookingStep, {
      step: 2,
      total: total,
      question: "Which evening?",
      help: "Bookings open four months ahead. One sitting a night, arrival at 18:30."
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Date",
      type: "date",
      value: date,
      onChange: setDate
    })),
    3: /*#__PURE__*/React.createElement(BookingStep, {
      step: 3,
      total: total,
      question: "Anything the kitchen should know?",
      help: "Allergies and restrictions are handled seat by seat, so name the guest each note belongs to."
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Dietary notes",
      multiline: true,
      value: diet,
      onChange: setDiet,
      placeholder: "Seat 2, no shellfish."
    })),
    4: /*#__PURE__*/React.createElement(BookingStep, {
      step: 4,
      total: total,
      question: "Is the evening for an occasion?",
      help: "Optional. It changes nothing about the menu, only what we know when you sit down."
    }, /*#__PURE__*/React.createElement(ChoiceGroup, {
      columns: 3,
      value: occ,
      onChange: setOcc,
      options: ['Anniversary', 'Birthday', 'No occasion']
    })),
    5: /*#__PURE__*/React.createElement(BookingStep, {
      step: 5,
      total: total,
      question: "Where do we confirm?",
      help: "A deposit is taken at booking and is refundable outside 48 hours."
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Email",
      type: "email",
      value: email,
      onChange: setEmail,
      placeholder: "you@example.com"
    })),
    6: /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 644
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        ...daoType.d40,
        color: 'var(--ink)'
      }
    }, "That is everything we need"), /*#__PURE__*/React.createElement("p", {
      style: {
        ...daoType.body,
        color: 'var(--ink-2)',
        marginTop: 16
      }
    }, "Payment and the live reservation system are not wired up yet. ", seats, " ", seats === '1' ? 'seat' : 'seats', " held, arrival 18:30."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement(Button, {
      tone: "cream",
      onClick: () => setStep(1)
    }, "Start again")))
  };
  return /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark"
  }, /*#__PURE__*/React.createElement(NavBar, {
    tone: "cream",
    active: "reserve",
    logoSrc: LOGO_WHITE,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 96,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 9'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...daoType.d96,
      color: 'var(--ink)'
    }
  }, "Sixteen seats,", /*#__PURE__*/React.createElement("br", null), "one sitting a night")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '10 / 13',
      alignSelf: 'end',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...daoType.meta,
      color: 'var(--ink-3)'
    }
  }, "Next seats, 14 October")))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 7'
    }
  }, steps[step], step <= total ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "cream",
    onClick: next,
    ruleWidth: 110
  }, step === total ? 'Request the booking' : 'Continue'), step > 1 ? /*#__PURE__*/React.createElement(Button, {
    tone: "cream",
    variant: "line",
    onClick: back
  }, "Back") : null) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / 13'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: P + 'kitchen-service-01029.jpg',
    alt: "",
    style: {
      width: '100%',
      height: 520,
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 5'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...daoType.d40,
      color: 'var(--ink)'
    }
  }, "The facts,", /*#__PURE__*/React.createElement("br", null), "plainly")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '6 / 13'
    }
  }, /*#__PURE__*/React.createElement(FactRow, {
    label: "Address",
    value: "Koh Phangan, Thailand",
    note: "Exact address to be confirmed by the client."
  }), /*#__PURE__*/React.createElement(FactRow, {
    label: "Arrival",
    value: "18:30",
    note: "One arrival time. Everyone starts together."
  }), /*#__PURE__*/React.createElement(FactRow, {
    label: "Duration",
    value: "About 3 hours"
  }), /*#__PURE__*/React.createElement(FactRow, {
    label: "Menu",
    value: "THB 3,900 per guest",
    note: "A fixed multi-course tasting menu, adapted per seat."
  }), /*#__PURE__*/React.createElement(FactRow, {
    label: "Wine pairing",
    value: "THB 2,200 per guest",
    note: "The only drinks option. No cocktail bar."
  }), /*#__PURE__*/React.createElement(FactRow, {
    label: "Dress",
    value: "None. Island casual."
  }), /*#__PURE__*/React.createElement(FactRow, {
    label: "Deposit",
    value: "Taken at booking",
    note: "Refundable outside 48 hours."
  })))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 5'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...daoType.d40,
      color: 'var(--ink)'
    }
  }, "Questions", /*#__PURE__*/React.createElement("br", null), "people ask")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '6 / 13'
    }
  }, faq.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      borderTop: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenQ(openQ === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 24,
      background: 'none',
      border: 0,
      padding: '20px 0',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...daoType.d24,
      color: 'var(--ink)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      ...daoType.meta,
      color: 'var(--ink-3)',
      whiteSpace: 'nowrap'
    }
  }, openQ === i ? 'Close' : 'Read')), openQ === i ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 24,
      ...daoType.body,
      color: 'var(--ink-2)'
    }
  }, a) : null))))), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: onNavigate
  }));
}
window.ReserveScreen = ReserveScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ReserveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const DAO_BASE = window.DAO_BASE || '../..';
const P = DAO_BASE + '/assets/photos/';
const LOGO_BLACK = DAO_BASE + '/assets/logo-black.svg';
const LOGO_WHITE = DAO_BASE + '/assets/logo-white.svg';
const daoType = {
  d96: {
    font: '300 96px/0.95 var(--font-display)',
    letterSpacing: '-.02em',
    margin: 0
  },
  d64: {
    font: '300 64px/1.0 var(--font-display)',
    letterSpacing: '-.02em',
    margin: 0
  },
  d56: {
    font: '300 56px/1.0 var(--font-display)',
    letterSpacing: '-.02em',
    margin: 0
  },
  d40: {
    font: '300 40px/1.1 var(--font-display)',
    letterSpacing: '-.01em',
    margin: 0
  },
  d32: {
    font: '400 32px/1.1 var(--font-display)',
    letterSpacing: '-.01em',
    margin: 0
  },
  d24: {
    font: '400 24px/1.3 var(--font-display)',
    letterSpacing: '-.01em',
    margin: 0
  },
  body: {
    font: '400 16px/1.55 var(--font-body)',
    maxWidth: '65ch',
    margin: 0
  },
  small: {
    font: '400 12px/1.5 var(--font-body)',
    margin: 0
  },
  meta: {
    font: '500 10px/1 var(--font-body)',
    letterSpacing: '.22em',
    textTransform: 'uppercase'
  }
};
function Wrap({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      marginInline: 'auto',
      paddingInline: 64,
      ...style
    }
  }, children);
}
function Grid({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12,minmax(0,1fr))',
      gap: '0 24px',
      ...style
    }
  }, children);
}
function MetaLine({
  left,
  right,
  tone
}) {
  const c = tone === 'cream' ? 'var(--meta-on-image)' : 'var(--ink-3)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      paddingTop: 14,
      borderTop: '1px solid ' + (tone === 'cream' ? 'var(--rule-on-image)' : 'var(--rule)'),
      ...daoType.meta,
      color: c
    }
  }, /*#__PURE__*/React.createElement("span", null, left), /*#__PURE__*/React.createElement("span", null, right));
}
function Footer({
  onNavigate
}) {
  const {
    Button
  } = window.DaoDesignSystem_7e669b;
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark",
    style: {
      background: 'var(--charcoal)',
      color: 'var(--ink)',
      paddingTop: 96,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'end',
      paddingBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, "Sixteen seats,", /*#__PURE__*/React.createElement("br", null), "one sitting a night"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "cream",
    onClick: () => onNavigate('reserve')
  }, "Reserve a seat"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / 13',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO_WHITE,
    alt: "Dao",
    style: {
      width: 100,
      height: 48,
      marginLeft: 'auto'
    }
  }))), /*#__PURE__*/React.createElement(MetaLine, {
    left: "Koh Phangan, Thailand",
    right: "The path of food & hospitality",
    tone: "cream"
  })));
}
Object.assign(window, {
  P,
  LOGO_BLACK,
  LOGO_WHITE,
  daoType,
  Wrap,
  Grid,
  MetaLine,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StoryScreen.jsx
try { (() => {
function StoryScreen({
  onNavigate
}) {
  const {
    NavBar,
    ImageFrame,
    Button
  } = window.DaoDesignSystem_7e669b;
  const press = [['Placeholder pull quote, to be replaced with the verbatim line.', 'The New York Times', 'January 2013'], ['Placeholder pull quote from Tables for Two.', 'The New Yorker', 'October 2015'], ['Placeholder listing line.', 'Michelin Guide', '2016']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    active: "story",
    logoSrc: LOGO_BLACK,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 96,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 9'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: daoType.d96
  }, "Israel, Milan,", /*#__PURE__*/React.createElement("br", null), "New York, the island")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / 13',
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.small,
      color: 'var(--ink-2)'
    }
  }, "Chef Nir Mesika. Ancestry from Egypt and Morocco, a grandfather who ran a bakery, a mother who passed on the recipes.")))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      rowGap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 8'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: P + 'nir-entrance-00849.jpg',
    height: 520
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / 13',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)'
    }
  }, "Culinary school, then kitchens in Tel Aviv and Milan. Zizi Limona in Williamsburg. Timna in the East Village, modern Israeli fine dining on a tasting menu. Then he chose the island over the city.")))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: daoType.d56
  }, "Nine children,", /*#__PURE__*/React.createElement("br", null), "one kitchen")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '7 / 12'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)'
    }
  }, "His grandmother raised nine children and the older siblings cooked for the younger ones. That is where the communal table comes from. It is not a philosophy about hospitality, it is the way a family ate."), /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)',
      marginTop: 20
    }
  }, "Moroccan flavours still run through the food. So does the habit of feeding people at the same time, from the same pot.")))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rule)',
      paddingTop: 56,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 48
    }
  }, press.map(([q, p, d]) => /*#__PURE__*/React.createElement("blockquote", {
    key: p,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.d24,
      color: 'var(--ink)'
    }
  }, q), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 12,
      borderTop: '1px solid var(--rule)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      ...daoType.meta,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, p), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, d)))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      rowGap: 24,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 5'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: daoType.d40
  }, "Made on the island"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.body,
      color: 'var(--ink-2)',
      marginTop: 20
    }
  }, "The ceramics, the furniture, the kitchen island. Names of the makers to come from the client."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line",
    onClick: () => onNavigate('evening')
  }, "See the evening"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '6 / 13'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: P + 'ceramics-00808.jpg',
    height: 420,
    caption: "Ceramics and tableware, photographed. The makers are not photographed yet."
  })))), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: onNavigate
  }));
}
window.StoryScreen = StoryScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-structures/Structures.jsx
try { (() => {
const {
  NavBar,
  Button,
  ImageFrame,
  PaperGround
} = window.DaoDesignSystem_7e669b;
const IMG = {
  hero: P + 'nir-plating-01034.jpg',
  forage: P + 'foraging-00497.jpg',
  prep: P + 'prep-overhead-0112.jpg',
  ceramics: P + 'ceramics-00808.jpg',
  table: P + 'table-guests-01091.jpg',
  set: P + 'set-table-00997.jpg',
  nir: P + 'nir-entrance-00849.jpg'
};
const COPY = {
  format: 'One table, sixteen seats,\none arrival time, one menu',
  formatBody: 'Everyone arrives at 18:30 and eats the same menu, adapted seat by seat. Thai produce and Thai suppliers, cooked the way Nir Mesika learned to cook in Israel and Morocco. Wine pairing is the only drinks option.',
  seated: 'You will be seated with people you have not met. The first fifteen minutes can be quiet. Then Nir comes out, introduces the evening, and the table stops being a room full of strangers.',
  day: 'The market run, the foraging, the prep. None of it is visible at the table, and all of it is why the table works.',
  night: 'Nir comes out every evening, introduces himself and walks the table through the meal. Music shifts with the courses. Nobody is handed a menu.',
  nir: 'Israel, then Tel Aviv and Milan, then two restaurants in New York, then this island. He grew up in a house where his grandmother raised nine children and the older ones cooked for the younger. The shared table is how he was fed.',
  facts: [['Arrival', '18:30'], ['Duration', 'About 3 hours'], ['Seats', '16'], ['Menu', 'THB 3,900']]
};
const Br = ({
  t
}) => t.split('\n').map((l, i, a) => /*#__PURE__*/React.createElement(React.Fragment, {
  key: i
}, l, i < a.length - 1 && /*#__PURE__*/React.createElement("br", null)));
const Body = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    ...daoType.body,
    color: 'var(--ink-2)',
    ...style
  }
}, children);
const Img = ({
  src,
  h,
  style,
  pos
}) => /*#__PURE__*/React.createElement("img", {
  src: src,
  alt: "",
  style: {
    width: '100%',
    height: h,
    objectFit: 'cover',
    objectPosition: pos || 'center',
    ...style
  }
});
const QuietFooter = () => /*#__PURE__*/React.createElement("div", {
  "data-theme": "dark",
  style: {
    background: 'var(--charcoal)',
    color: 'var(--ink)',
    paddingTop: 56,
    paddingBottom: 56
  }
}, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    paddingBottom: 40
  }
}, /*#__PURE__*/React.createElement("img", {
  src: LOGO_WHITE,
  alt: "Dao",
  style: {
    width: 100,
    height: 48
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 40,
    ...daoType.meta,
    color: 'var(--meta-on-image)'
  }
}, /*#__PURE__*/React.createElement("span", null, "Story"), /*#__PURE__*/React.createElement("span", null, "Evening"), /*#__PURE__*/React.createElement("span", null, "Reserve"))), /*#__PURE__*/React.createElement(MetaLine, {
  left: "Koh Phangan, Thailand",
  right: "The path of food & hospitality",
  tone: "cream"
})));
const Facts = ({
  cols = 2,
  tone
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols},1fr)`,
    gap: '0 24px'
  }
}, COPY.facts.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
  key: k,
  style: {
    padding: '12px 0',
    borderTop: '1px solid ' + (tone === 'rule' ? 'var(--rule)' : 'var(--rule-faint)')
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    ...daoType.small,
    color: 'var(--ink-3)'
  }
}, k), /*#__PURE__*/React.createElement("div", {
  style: {
    font: '400 13px/1.5 var(--font-body)',
    fontVariantNumeric: 'tabular-nums',
    marginTop: 3,
    color: 'var(--ink)'
  }
}, v))));
function Hero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 860,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hero,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-floor)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-band)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    tone: "cream",
    active: "home",
    logoSrc: LOGO_WHITE
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 700,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      ...daoType.d64,
      color: 'var(--ink-on-image)',
      textAlign: 'center'
    }
  }, "Dinner as a journey,", /*#__PURE__*/React.createElement("br", null), "a sixteen-seat chef\u2019s table"), /*#__PURE__*/React.createElement(Button, {
    tone: "cream"
  }, "Reserve a seat"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 64,
      bottom: 36,
      zIndex: 2,
      ...daoType.meta,
      color: 'var(--meta-on-image)'
    }
  }, "Koh Phangan"));
}

/* A. The walk. Five beats in the brief's order, each on its own ground, one photo scale per beat. */
function StructureA() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 7'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: daoType.d56
  }, /*#__PURE__*/React.createElement(Br, {
    t: COPY.format
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / 12'
    }
  }, /*#__PURE__*/React.createElement(Body, null, COPY.formatBody), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Facts, null))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      rowGap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 5'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: IMG.forage,
    height: 320,
    caption: "Sourcing and foraging, before service."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '5 / 9'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: IMG.prep,
    height: 320
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / 13'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: IMG.ceramics,
    height: 320,
    caption: "Plates made on the island."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6',
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: daoType.d40
  }, "The day is the first half of the evening"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 20
    }
  }, COPY.day)))), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark",
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'end',
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 7'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, "Then the room goes dark", /*#__PURE__*/React.createElement("br", null), "and the table starts")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / 12'
    }
  }, /*#__PURE__*/React.createElement(Body, null, COPY.night)))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1312,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.table,
    h: 620
  })), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 4'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.set,
    h: 240
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '5 / 10',
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(Body, null, COPY.seated))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: daoType.d40
  }, "Nir Mesika"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 20
    }
  }, COPY.nir), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line"
  }, "Read his story"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '7 / 13',
      marginRight: -64
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.nir,
    h: 520
  })))), /*#__PURE__*/React.createElement(Footer, {
    onNavigate: () => {}
  }));
}

/* B. Facts first. The answer to "what is this" is a data strip; reassurance gets its own beat; reserve is a section, not a footer. */
function StructureB() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '0 24px',
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)'
    }
  }, COPY.facts.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...daoType.meta,
      color: 'var(--ink-3)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 24px/1.3 var(--font-display)',
      fontVariantNumeric: 'tabular-nums',
      marginTop: 10
    }
  }, v))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 120,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 9'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: daoType.d64
  }, /*#__PURE__*/React.createElement(Br, {
    t: COPY.format
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6',
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement(Body, null, COPY.formatBody)))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 8'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: IMG.forage,
    height: 560,
    caption: "Sourcing and foraging, before service."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / 13'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: daoType.d40
  }, "The day is the first half of the evening"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 20
    }
  }, COPY.day), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.prep,
    h: 200
  }), /*#__PURE__*/React.createElement(Img, {
    src: IMG.ceramics,
    h: 200
  }))))), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark",
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, "Then the room goes dark", /*#__PURE__*/React.createElement("br", null), "and the table starts")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 5',
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement(Body, null, COPY.night)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '6 / 13',
      marginRight: -64,
      marginTop: -40
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.table,
    h: 640
  }))), /*#__PURE__*/React.createElement(Grid, {
    style: {
      paddingTop: 120,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 5'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.set,
    h: 340
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '6 / 11'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d32,
      fontWeight: 300,
      color: 'var(--ink)'
    }
  }, "Sitting with strangers"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 20
    }
  }, COPY.seated))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 4'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.nir,
    h: 380
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '5 / 11'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: daoType.d40
  }, "Nir Mesika"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 20
    }
  }, COPY.nir), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line"
  }, "Read his story"))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--rule)',
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 7'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: daoType.d56
  }, "Sixteen seats,", /*#__PURE__*/React.createElement("br", null), "one sitting a night")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / 12'
    }
  }, /*#__PURE__*/React.createElement(Facts, {
    tone: "rule"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Reserve a seat")))))), /*#__PURE__*/React.createElement(QuietFooter, null));
}

/* C. Two halves. Light until the table, then charcoal to the end. Nir and reserve live in the night. */
function StructureC() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 160,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '3 / 11'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...daoType.d64,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Br, {
    t: COPY.format
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '3 / 8',
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement(Body, null, COPY.formatBody)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '9 / 11',
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement(Facts, {
    cols: 1
  })))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 5',
      paddingTop: 80
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: daoType.d40
  }, "The day is the first half of the evening"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 20
    }
  }, COPY.day)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '6 / 10'
    }
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: IMG.forage,
    height: 480,
    caption: "Sourcing and foraging, before service."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '10 / 13',
      paddingTop: 160,
      display: 'grid',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.prep,
    h: 220
  }), /*#__PURE__*/React.createElement(Img, {
    src: IMG.ceramics,
    h: 220
  })))), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark"
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.table,
    h: 780
  }), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 120,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 7'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, "Then the room goes dark", /*#__PURE__*/React.createElement("br", null), "and the table starts")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / 12'
    }
  }, /*#__PURE__*/React.createElement(Body, null, COPY.night), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 24
    }
  }, COPY.seated))), /*#__PURE__*/React.createElement(Grid, {
    style: {
      paddingTop: 160,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.set,
    h: 400
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '7 / 13'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.nir,
    h: 280
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d32,
      color: 'var(--ink)'
    }
  }, "Nir Mesika"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 16,
      font: '400 14px/1.55 var(--font-body)'
    }
  }, COPY.nir), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line",
    tone: "cream"
  }, "Read his story")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 160,
      borderTop: '1px solid var(--rule)',
      paddingTop: 56
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 7'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, "Sixteen seats,", /*#__PURE__*/React.createElement("br", null), "one sitting a night")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '8 / 12'
    }
  }, /*#__PURE__*/React.createElement(Body, null, "Booked four months ahead. The next open date is on the button."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "cream"
  }, "Reserve a seat")))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    left: "Koh Phangan, Thailand",
    right: "The path of food & hospitality",
    tone: "cream"
  }))));
}

/* D. The letter. One text column reads straight down; photographs sit in the margins, one per beat. Night is a single grid break. */
function StructureD() {
  const col = {
    gridColumn: '4 / 10'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 160,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h2", {
    style: daoType.d56
  }, /*#__PURE__*/React.createElement(Br, {
    t: COPY.format
  })), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 40
    }
  }, COPY.formatBody)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '11 / 13',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Facts, {
    cols: 1
  })))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 3',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.ceramics,
    h: 160
  })), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement(ImageFrame, {
    src: IMG.forage,
    height: 420,
    caption: "Sourcing and foraging, before service."
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d40,
      marginTop: 96
    }
  }, "The day is the first half of the evening"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 20
    }
  }, COPY.day)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '11 / 13',
      paddingTop: 520
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.prep,
    h: 160
  })))), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark",
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, "Then the room goes dark", /*#__PURE__*/React.createElement("br", null), "and the table starts"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 40
    }
  }, COPY.night), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 24
    }
  }, COPY.seated))), /*#__PURE__*/React.createElement(Grid, {
    style: {
      paddingTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 4',
      alignSelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.set,
    h: 260
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '4 / 13',
      marginRight: -64
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.table,
    h: 600
  }))))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      paddingTop: 160,
      paddingBottom: 160
    }
  }, /*#__PURE__*/React.createElement(Grid, {
    style: {
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 3'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.nir,
    h: 220
  })), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h3", {
    style: daoType.d40
  }, "Nir Mesika"), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 20
    }
  }, COPY.nir), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line"
  }, "Read his story")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 120,
      borderTop: '1px solid var(--rule)',
      paddingTop: 40,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: daoType.d40
  }, "Sixteen seats, one sitting a night"), /*#__PURE__*/React.createElement(Button, null, "Reserve a seat"))))), /*#__PURE__*/React.createElement(QuietFooter, null));
}
Object.assign(window, {
  IMG,
  COPY,
  Hero,
  Br,
  Body,
  Img,
  QuietFooter
});
const VERSIONS = [{
  id: '1a',
  el: 'a',
  title: 'The walk',
  note: 'Five beats in the brief\u2019s order. Each on its own ground, one photo scale per beat. Closest to the current build.',
  C: StructureA
}, {
  id: '1b',
  el: 'b',
  title: 'Facts first',
  note: 'A data strip answers \u201cwhat is this\u201d before any prose. Reassurance is its own beat. Reserve is a section with the facts, not just the footer.',
  C: StructureB
}, {
  id: '1c',
  el: 'c',
  title: 'Two halves',
  note: 'Light until the table, then charcoal to the end. Nir and reserve live in the night. The dark half carries most of the weight.',
  C: StructureC
}, {
  id: '1d',
  el: 'd',
  title: 'The letter',
  note: 'One text column reads straight down. Photographs sit in the margins, small and single. Night is the one grid break.',
  C: StructureD
}];
VERSIONS.forEach(v => {
  const root = document.getElementById(v.el);
  if (!root) return;
  ReactDOM.createRoot(root).render(/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'baseline',
      marginBottom: 20,
      color: '#1A1815'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 Inter,system-ui',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      padding: '6px 8px',
      border: '1px solid #1A1815'
    }
  }, v.id), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 28px/1 "Season Mix",Georgia,serif'
    }
  }, v.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.5 Inter,system-ui',
      color: 'rgba(26,24,21,.7)',
      maxWidth: 760
    }
  }, v.note)), /*#__PURE__*/React.createElement("div", {
    className: "dao-paper",
    style: {
      width: 1440,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(v.C, null))));
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-structures/Structures.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-structures/Structures2.jsx
try { (() => {
const {
  NavBar,
  Button,
  PaperGround
} = window.DaoDesignSystem_7e669b;
const {
  IMG,
  COPY,
  Hero,
  Br,
  Body,
  Img,
  QuietFooter
} = window;
const S = {
  format: 'One table, sixteen seats, one arrival time, one menu. Thai produce, cooked the way Nir Mesika learned to cook in Israel and Morocco.',
  day: 'The day is the first half of the evening. The market run, the foraging, the prep: none of it is visible at the table, and all of it is why the table works.',
  night: 'Then the room goes dark and the table starts. Nir comes out, introduces the evening, and walks the table through the meal.',
  seated: 'You will be seated with people you have not met. The first fifteen minutes can be quiet. Then the table stops being a room full of strangers.',
  nir: 'Nir grew up in a house where his grandmother raised nine children and the older ones cooked for the younger. The shared table is how he was fed.',
  reserve: 'Sixteen seats, one sitting a night.'
};
const Light = {
  ...daoType.d40,
  fontWeight: 300
};
const FactsPlain = ({
  align = 'flex-start'
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 56,
    justifyContent: align
  }
}, COPY.facts.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
  key: k
}, /*#__PURE__*/React.createElement("div", {
  style: {
    ...daoType.small,
    color: 'var(--ink-3)'
  }
}, k), /*#__PURE__*/React.createElement("div", {
  style: {
    font: '400 14px/1.5 var(--font-body)',
    fontVariantNumeric: 'tabular-nums',
    marginTop: 4,
    color: 'var(--ink)'
  }
}, v))));
const Pair = ({
  a,
  b,
  h,
  split = '1fr 1fr'
}) => /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: split,
    gap: 24
  }
}, /*#__PURE__*/React.createElement(Img, {
  src: a,
  h: h
}), /*#__PURE__*/React.createElement(Img, {
  src: b,
  h: h
})));
const Sec = ({
  children,
  pt = 160,
  pb = 160
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: pt,
    paddingBottom: pb
  }
}, children);

/* 2a Axis. Everything on the centre line. A statement, then a picture. Nothing else. */
function StructureE() {
  const St = ({
    children,
    size = Light,
    mt
  }) => /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '4 / 10',
      textAlign: 'center',
      marginTop: mt
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: size
  }, children))));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Sec, {
    pb: 120
  }, /*#__PURE__*/React.createElement(St, null, S.format), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(FactsPlain, {
    align: "center"
  })))), /*#__PURE__*/React.createElement(Img, {
    src: IMG.table,
    h: 800
  }), /*#__PURE__*/React.createElement(Sec, {
    pb: 96
  }, /*#__PURE__*/React.createElement(St, null, S.day)), /*#__PURE__*/React.createElement(Pair, {
    a: IMG.forage,
    b: IMG.prep,
    h: 560
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160
    }
  }), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark"
  }, /*#__PURE__*/React.createElement(Sec, {
    pb: 96
  }, /*#__PURE__*/React.createElement(St, null, S.night)), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '3 / 11'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.set,
    h: 600
  })))), /*#__PURE__*/React.createElement(Sec, {
    pt: 96
  }, /*#__PURE__*/React.createElement(St, {
    size: {
      ...daoType.d32,
      fontWeight: 300
    }
  }, S.seated))), /*#__PURE__*/React.createElement(Sec, {
    pb: 0
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '5 / 9'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.nir,
    h: 520
  })))), /*#__PURE__*/React.createElement(St, {
    size: {
      ...daoType.d32,
      fontWeight: 300
    },
    mt: 64
  }, S.nir), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line"
  }, "Read his story"))), /*#__PURE__*/React.createElement(Sec, null, /*#__PURE__*/React.createElement(St, {
    size: daoType.d56
  }, S.reserve), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Reserve a seat"))), /*#__PURE__*/React.createElement(QuietFooter, null));
}

/* 2b Spine. Text always starts at column 1, six wide. Photographs always reach the right edge. */
function StructureF() {
  const St = ({
    children,
    size = Light,
    cols = '1 / 7'
  }) => /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: cols
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: size
  }, children))));
  const Right = ({
    src,
    h,
    from = '5 / 13'
  }) => /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: from,
      marginRight: -64
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: src,
    h: h
  }))));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Sec, {
    pb: 120
  }, /*#__PURE__*/React.createElement(St, {
    size: daoType.d56
  }, /*#__PURE__*/React.createElement(Br, {
    t: COPY.format
  })), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Body, null, COPY.formatBody)), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 9',
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(FactsPlain, null))))), /*#__PURE__*/React.createElement(Right, {
    src: IMG.forage,
    h: 640
  }), /*#__PURE__*/React.createElement(Sec, {
    pb: 96
  }, /*#__PURE__*/React.createElement(St, null, S.day)), /*#__PURE__*/React.createElement(Right, {
    src: IMG.prep,
    h: 480,
    from: "7 / 13"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160
    }
  }), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark"
  }, /*#__PURE__*/React.createElement(Sec, {
    pb: 96
  }, /*#__PURE__*/React.createElement(St, {
    size: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, "Then the room goes dark", /*#__PURE__*/React.createElement("br", null), "and the table starts"), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Body, null, COPY.night))))), /*#__PURE__*/React.createElement(Img, {
    src: IMG.table,
    h: 720
  }), /*#__PURE__*/React.createElement(Sec, {
    pt: 96
  }, /*#__PURE__*/React.createElement(St, {
    size: {
      ...daoType.d32,
      fontWeight: 300,
      color: 'var(--ink)'
    }
  }, S.seated))), /*#__PURE__*/React.createElement(Sec, {
    pb: 96
  }, /*#__PURE__*/React.createElement(Right, {
    src: IMG.nir,
    h: 560,
    from: "6 / 13"
  })), /*#__PURE__*/React.createElement(St, null, S.nir), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line"
  }, "Read his story"))), /*#__PURE__*/React.createElement(Sec, null, /*#__PURE__*/React.createElement(St, {
    size: daoType.d56
  }, S.reserve), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Reserve a seat")))), /*#__PURE__*/React.createElement(QuietFooter, null));
}

/* 2c Pictures first. Every beat opens with a photograph, edge to edge, and the words come after. */
function StructureG() {
  const St = ({
    children,
    size = Light,
    cols = '1 / 7',
    pt = 96
  }) => /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: cols,
      paddingTop: pt
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: size
  }, children))));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(Img, {
    src: IMG.forage,
    h: 820
  }), /*#__PURE__*/React.createElement(St, null, S.format), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(FactsPlain, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160
    }
  }), /*#__PURE__*/React.createElement(Pair, {
    a: IMG.prep,
    b: IMG.ceramics,
    h: 500
  }), /*#__PURE__*/React.createElement(St, null, S.day), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160
    }
  }), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark"
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.table,
    h: 820
  }), /*#__PURE__*/React.createElement(St, {
    size: {
      ...Light,
      color: 'var(--ink)'
    }
  }, S.night), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / 6',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Body, null, S.seated)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160
    }
  }), /*#__PURE__*/React.createElement(Pair, {
    a: IMG.set,
    b: IMG.nir,
    h: 560,
    split: "7fr 5fr"
  }), /*#__PURE__*/React.createElement(St, {
    size: {
      ...daoType.d32,
      fontWeight: 300,
      color: 'var(--ink)'
    }
  }, S.nir), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line",
    tone: "cream"
  }, "Read his story"))), /*#__PURE__*/React.createElement(Sec, null, /*#__PURE__*/React.createElement(St, {
    size: {
      ...daoType.d56,
      color: 'var(--ink)'
    },
    pt: 0
  }, S.reserve), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "cream"
  }, "Reserve a seat")))), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    left: "Koh Phangan, Thailand",
    right: "The path of food & hospitality",
    tone: "cream"
  })))));
}

/* 2d Long read. Words once, in one column. Then a run of photographs with nothing said. Then Nir, in the dark. */
function StructureH() {
  const col = {
    gridColumn: '4 / 10'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Sec, {
    pb: 120
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("h2", {
    style: daoType.d56
  }, /*#__PURE__*/React.createElement(Br, {
    t: COPY.format
  })), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 48
    }
  }, COPY.formatBody), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 24
    }
  }, COPY.seated), /*#__PURE__*/React.createElement(Body, {
    style: {
      marginTop: 24
    }
  }, COPY.day), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(FactsPlain, null)))))), /*#__PURE__*/React.createElement(Img, {
    src: IMG.table,
    h: 760
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(Pair, {
    a: IMG.forage,
    b: IMG.prep,
    h: 600,
    split: "7fr 5fr"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.ceramics,
    h: 480
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Img, {
    src: IMG.set,
    h: 600
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160
    }
  }), /*#__PURE__*/React.createElement(PaperGround, {
    theme: "dark"
  }, /*#__PURE__*/React.createElement(Sec, null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '4 / 7'
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: IMG.nir,
    h: 400
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...col,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...Light,
      color: 'var(--ink)'
    }
  }, S.night), /*#__PURE__*/React.createElement("p", {
    style: {
      ...Light,
      color: 'var(--ink)',
      marginTop: 32
    }
  }, S.nir), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "line",
    tone: "cream"
  }, "Read his story")))))), /*#__PURE__*/React.createElement(Sec, {
    pt: 0
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      ...daoType.d56,
      color: 'var(--ink)'
    }
  }, S.reserve), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "cream"
  }, "Reserve a seat")))))), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement(MetaLine, {
    left: "Koh Phangan, Thailand",
    right: "The path of food & hospitality",
    tone: "cream"
  })))));
}
const VERSIONS2 = [{
  id: '2a',
  el: 'e',
  title: 'Axis',
  note: 'Everything on the centre line. A statement, then a picture. Nothing else.',
  C: StructureE
}, {
  id: '2b',
  el: 'f',
  title: 'Spine',
  note: 'Text always starts at column 1, six wide. Photographs always reach the right edge.',
  C: StructureF
}, {
  id: '2c',
  el: 'g',
  title: 'Pictures first',
  note: 'Every beat opens with a photograph, edge to edge. The words come after.',
  C: StructureG
}, {
  id: '2d',
  el: 'h',
  title: 'Long read',
  note: 'Words once, in one column. Then a run of photographs with nothing said. Then Nir, in the dark.',
  C: StructureH
}];
VERSIONS2.forEach(v => {
  ReactDOM.createRoot(document.getElementById(v.el)).render(/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'baseline',
      marginBottom: 20,
      color: '#1A1815'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 Inter,system-ui',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      padding: '6px 8px',
      border: '1px solid #1A1815'
    }
  }, v.id), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 28px/1 "Season Mix",Georgia,serif'
    }
  }, v.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.5 Inter,system-ui',
      color: 'rgba(26,24,21,.7)',
      maxWidth: 760
    }
  }, v.note)), /*#__PURE__*/React.createElement("div", {
    className: "dao-paper",
    style: {
      width: 1440,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(v.C, null))));
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-structures/Structures2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-structures/Structures3.jsx
try { (() => {
const {
  NavBar,
  Button,
  PaperGround
} = window.DaoDesignSystem_7e669b;
const {
  IMG,
  COPY,
  Hero,
  Br,
  Body,
  Img,
  QuietFooter
} = window;
const T3 = {
  open: 'One table, sixteen seats, one arrival time, one menu.',
  openBody: 'Thai produce and Thai suppliers, cooked the way Nir Mesika learned to cook in Israel and Morocco. Everyone arrives at 18:30 and eats the same menu, adapted seat by seat.',
  nir: 'Nir grew up in a house where his grandmother raised nine children and the older ones cooked for the younger. The shared table is how he was fed.',
  facts: ['Dinner starts at 18:30, together.', 'It lasts about three hours.', 'Sixteen seats, one sitting a night.', 'THB 3,900 a person, wine pairing included.'],
  faq: [['Will I sit with other people?', 'Yes. One table, sixteen seats. You will be seated with guests you have not met. It is the point of the format.'], ['What if I have a dietary restriction?', 'Tell us when you book, seat by seat. The menu adapts without losing its shape. Most restrictions are fine; a few are not, and we will say so.'], ['Is there a bar?', 'No cocktails. The wine pairing is the only drinks option and it is built with the menu.'], ['What should I wear?', 'Nothing in particular. Island casual.'], ['How far ahead can I book?', 'Four months. Dates open on a rolling basis and the next available one is on every reserve button.'], ['Can we take the whole room?', 'Yes. Sixteen seats, one evening, yours. Ask when you book.']]
};
const Sp = ({
  h
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: h
  }
});
const Open = () => /*#__PURE__*/React.createElement(Wrap, {
  style: {
    paddingTop: 160,
    paddingBottom: 120
  }
}, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '3 / 11',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    ...daoType.d40,
    fontWeight: 300
  }
}, T3.open), /*#__PURE__*/React.createElement(Body, {
  style: {
    marginTop: 32,
    maxWidth: 560,
    marginInline: 'auto',
    textAlign: 'center'
  }
}, T3.openBody))));
const Evening = ({
  photoFirst
}) => /*#__PURE__*/React.createElement(PaperGround, {
  theme: "dark"
}, photoFirst && /*#__PURE__*/React.createElement(Img, {
  src: IMG.table,
  h: 780
}), /*#__PURE__*/React.createElement(Wrap, {
  style: {
    paddingTop: photoFirst ? 96 : 160,
    paddingBottom: photoFirst ? 160 : 96
  }
}, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '1 / 7'
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    ...daoType.d56,
    color: 'var(--ink)'
  }
}, "Then the room goes dark", /*#__PURE__*/React.createElement("br", null), "and the table starts")), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '8 / 12'
  }
}, /*#__PURE__*/React.createElement(Body, null, COPY.night), /*#__PURE__*/React.createElement(Body, {
  style: {
    marginTop: 24
  }
}, COPY.seated)))), !photoFirst && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Img, {
  src: IMG.table,
  h: 780
}), /*#__PURE__*/React.createElement(Sp, {
  h: 160
})));
const Nir = () => /*#__PURE__*/React.createElement("div", {
  style: {
    paddingTop: 160,
    paddingBottom: 160
  }
}, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '5 / 9'
  }
}, /*#__PURE__*/React.createElement(Img, {
  src: IMG.nir,
  h: 520
})))), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '4 / 10',
    textAlign: 'center',
    marginTop: 64
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    ...daoType.d32,
    fontWeight: 300
  }
}, T3.nir)))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "line"
}, "Read his story")));
const Facts = ({
  dark,
  withReserve
}) => /*#__PURE__*/React.createElement(Wrap, {
  style: {
    paddingTop: 160,
    paddingBottom: 160
  }
}, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '1 / 3'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    ...daoType.meta,
    color: 'var(--ink-3)'
  }
}, "The facts")), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '3 / 10',
    display: 'grid',
    gap: 20
  }
}, T3.facts.map(f => /*#__PURE__*/React.createElement("p", {
  key: f,
  style: {
    ...daoType.d40,
    fontWeight: 300,
    color: 'var(--ink)'
  }
}, f))), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '10 / 13'
  }
}, /*#__PURE__*/React.createElement(Body, {
  style: {
    font: '400 14px/1.6 var(--font-body)'
  }
}, "Koh Phangan, Thailand. Exact address with your confirmation."), /*#__PURE__*/React.createElement(Body, {
  style: {
    font: '400 14px/1.6 var(--font-body)',
    marginTop: 16
  }
}, "No dress code. Wine pairing is the only drinks option."), withReserve && /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40
  }
}, /*#__PURE__*/React.createElement(Button, {
  tone: dark ? 'cream' : undefined
}, "Reserve a seat")))));
const Faq = ({
  dark
}) => /*#__PURE__*/React.createElement(Wrap, {
  style: {
    paddingTop: 160,
    paddingBottom: 160
  }
}, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '1 / 5'
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    ...daoType.d40,
    color: 'var(--ink)'
  }
}, "Questions")), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '5 / 12',
    display: 'grid',
    gap: 48
  }
}, T3.faq.map(([q, a]) => /*#__PURE__*/React.createElement("div", {
  key: q
}, /*#__PURE__*/React.createElement("p", {
  style: {
    font: '300 24px/1.3 var(--font-display)',
    margin: 0,
    color: 'var(--ink)'
  }
}, q), /*#__PURE__*/React.createElement(Body, {
  style: {
    marginTop: 12,
    maxWidth: 520
  }
}, a))))));
const Reserve = ({
  tone
}) => /*#__PURE__*/React.createElement(Wrap, {
  style: {
    paddingTop: 160,
    paddingBottom: 160
  }
}, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '1 / 8'
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    ...daoType.d56,
    color: 'var(--ink)'
  }
}, "Sixteen seats,", /*#__PURE__*/React.createElement("br", null), "one sitting a night")), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '9 / 12',
    alignSelf: 'end'
  }
}, /*#__PURE__*/React.createElement(Body, null, "Booked about four months ahead. The next open date is on the button."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32
  }
}, /*#__PURE__*/React.createElement(Button, {
  tone: tone
}, "Reserve a seat")))));
const DarkTail = ({
  children
}) => /*#__PURE__*/React.createElement(PaperGround, {
  theme: "dark"
}, children, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
  style: {
    paddingBottom: 56
  }
}, /*#__PURE__*/React.createElement(MetaLine, {
  left: "Koh Phangan, Thailand",
  right: "The path of food & hospitality",
  tone: "cream"
}))));

/* Galleries */
const GalleryMosaic = () => /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, {
  style: {
    rowGap: 24
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '1 / 9'
  }
}, /*#__PURE__*/React.createElement(Img, {
  src: IMG.forage,
  h: 600
})), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '9 / 13'
  }
}, /*#__PURE__*/React.createElement(Img, {
  src: IMG.prep,
  h: 600
})), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '1 / 6'
  }
}, /*#__PURE__*/React.createElement(Img, {
  src: IMG.ceramics,
  h: 440
})), /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '6 / 13'
  }
}, /*#__PURE__*/React.createElement(Img, {
  src: IMG.set,
  h: 440
}))));
function GallerySlider() {
  const slides = [[IMG.forage, 720], [IMG.prep, 480], [IMG.ceramics, 560], [IMG.set, 720], [IMG.table, 560]];
  const [i, setI] = React.useState(0);
  const x = slides.slice(0, i).reduce((a, s) => a + s[1] + 24, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      paddingLeft: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      transform: `translateX(-${x}px)`,
      transition: 'transform 720ms cubic-bezier(.2,.7,.2,1)',
      willChange: 'transform'
    }
  }, slides.map(([s, w], k) => /*#__PURE__*/React.createElement("img", {
    key: k,
    src: s,
    alt: "",
    style: {
      width: w,
      height: 520,
      objectFit: 'cover',
      flex: 'none'
    }
  })))), /*#__PURE__*/React.createElement(Wrap, {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...daoType.meta,
      color: 'var(--ink-3)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0'), " / ", String(slides.length).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(v => Math.max(0, v - 1)),
    style: {
      all: 'unset',
      cursor: 'pointer',
      ...daoType.meta,
      color: i === 0 ? 'var(--ink-3)' : 'var(--ink)'
    }
  }, "Previous"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(v => Math.min(slides.length - 1, v + 1)),
    style: {
      all: 'unset',
      cursor: 'pointer',
      ...daoType.meta,
      color: i === slides.length - 1 ? 'var(--ink-3)' : 'var(--ink)'
    }
  }, "Next")))));
}
const GallerySheet = () => /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 24
  }
}, [IMG.forage, IMG.prep, IMG.ceramics, IMG.set].map(s => /*#__PURE__*/React.createElement(Img, {
  key: s,
  src: s,
  h: 400
}))));
const GalleryScales = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement("div", {
  style: {
    gridColumn: '2 / 12'
  }
}, /*#__PURE__*/React.createElement(Img, {
  src: IMG.forage,
  h: 720
})))), /*#__PURE__*/React.createElement(Sp, {
  h: 24
}), /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 24
  }
}, [IMG.prep, IMG.ceramics, IMG.set].map(s => /*#__PURE__*/React.createElement(Img, {
  key: s,
  src: s,
  h: 380
})))));

/* Pages */
const StructureI = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Open, null), /*#__PURE__*/React.createElement(GalleryMosaic, null), /*#__PURE__*/React.createElement(Sp, {
  h: 160
}), /*#__PURE__*/React.createElement(Evening, {
  photoFirst: true
}), /*#__PURE__*/React.createElement(Nir, null), /*#__PURE__*/React.createElement(Facts, null), /*#__PURE__*/React.createElement(DarkTail, null, /*#__PURE__*/React.createElement(Faq, {
  dark: true
}), /*#__PURE__*/React.createElement(Reserve, {
  tone: "cream"
})));
const StructureJ = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Open, null), /*#__PURE__*/React.createElement(GallerySlider, null), /*#__PURE__*/React.createElement(Sp, {
  h: 160
}), /*#__PURE__*/React.createElement(Evening, null), /*#__PURE__*/React.createElement(Facts, null), /*#__PURE__*/React.createElement(Nir, null), /*#__PURE__*/React.createElement(DarkTail, null, /*#__PURE__*/React.createElement(Faq, {
  dark: true
}), /*#__PURE__*/React.createElement(Reserve, {
  tone: "cream"
})));
const StructureK = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Open, null), /*#__PURE__*/React.createElement(GallerySheet, null), /*#__PURE__*/React.createElement(Sp, {
  h: 160
}), /*#__PURE__*/React.createElement(Evening, {
  photoFirst: true
}), /*#__PURE__*/React.createElement(Nir, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(DarkTail, null, /*#__PURE__*/React.createElement(Facts, {
  dark: true,
  withReserve: true
})));
const StructureL = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Open, null), /*#__PURE__*/React.createElement(GalleryScales, null), /*#__PURE__*/React.createElement(Sp, {
  h: 160
}), /*#__PURE__*/React.createElement(Evening, null), /*#__PURE__*/React.createElement(Nir, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Facts, null), /*#__PURE__*/React.createElement(DarkTail, null, /*#__PURE__*/React.createElement(Reserve, {
  tone: "cream"
})));
const VERSIONS3 = [{
  id: '3a',
  el: 'i',
  title: 'Mosaic',
  note: 'Two-row editorial grid, large over small. Then table (dark), Nir, facts, questions and reserve in the dark.',
  C: StructureI
}, {
  id: '3b',
  el: 'j',
  title: 'Slider',
  note: 'A horizontal strip at mixed widths, bleeding off the right edge. Then table, facts, Nir, questions and reserve.',
  C: StructureJ
}, {
  id: '3c',
  el: 'k',
  title: 'Contact sheet',
  note: 'Four equal frames in one row. Then table, Nir, questions; the facts close the page with the reserve button.',
  C: StructureK
}, {
  id: '3d',
  el: 'l',
  title: 'Two scales',
  note: 'One large centred frame over a row of three. Then table, Nir, questions, facts, reserve.',
  C: StructureL
}];
VERSIONS3.forEach(v => {
  ReactDOM.createRoot(document.getElementById(v.el)).render(/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'baseline',
      marginBottom: 20,
      color: '#1A1815'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 Inter,system-ui',
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      padding: '6px 8px',
      border: '1px solid #1A1815'
    }
  }, v.id), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '300 28px/1 "Season Mix",Georgia,serif'
    }
  }, v.title), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.5 Inter,system-ui',
      color: 'rgba(26,24,21,.7)',
      maxWidth: 760
    }
  }, v.note)), /*#__PURE__*/React.createElement("div", {
    className: "dao-paper",
    style: {
      width: 1440,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement(v.C, null))));
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-structures/Structures3.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ImageFrame = __ds_scope.ImageFrame;

__ds_ns.PaperGround = __ds_scope.PaperGround;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.FactRow = __ds_scope.FactRow;

__ds_ns.BookingStep = __ds_scope.BookingStep;

__ds_ns.ChoiceGroup = __ds_scope.ChoiceGroup;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.NextDateTooltip = __ds_scope.NextDateTooltip;

})();
