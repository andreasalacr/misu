/* @ds-bundle: {"format":4,"namespace":"MisDesignSystem_1d9d19","components":[{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/core/Card.jsx":"a39affb114d2","components/feedback/Badge.jsx":"15817cf91f4a","components/feedback/Tag.jsx":"cba5cf43c835","components/feedback/Toast.jsx":"f2d27c0e22d7","components/forms/Button.jsx":"f4a49977e51a","components/forms/Checkbox.jsx":"5db94e2dff6c","components/forms/Input.jsx":"84bae81aeb0b","components/forms/Radio.jsx":"7bc56784cba6","components/forms/Select.jsx":"32df2d3cc5af","components/forms/Switch.jsx":"239ea3198fa3","components/navigation/Tabs.jsx":"1717833a1660","components/overlay/Dialog.jsx":"399bd415c503","ui_kits/storefront/Cart.jsx":"c74a99ca0f9e","ui_kits/storefront/Home.jsx":"e09e14aa1de3","ui_kits/storefront/Menu.jsx":"728adc0a4027","ui_kits/storefront/Shell.jsx":"709a26a5d884"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MisDesignSystem_1d9d19 = window.MisDesignSystem_1d9d19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Card.jsx
try { (() => {
function Card({
  image,
  eyebrow,
  title,
  description,
  price,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-l)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-card)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '160px',
      background: 'var(--beige-secundario)'
    }
  }, image), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      flex: 1
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-normal)'
    }
  }, description), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 'var(--text-h4)',
      color: 'var(--accent-secondary)',
      marginTop: '4px'
    }
  }, price), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'accent'
}) {
  const tones = {
    accent: {
      background: 'var(--accent-primary)',
      color: '#fff'
    },
    neutral: {
      background: 'var(--beige-secundario)',
      color: 'var(--red-dark)'
    },
    success: {
      background: 'var(--success)',
      color: '#fff'
    },
    dark: {
      background: 'var(--red-dark)',
      color: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  selected,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-s)',
      fontWeight: 500,
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: `1px solid ${selected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
      background: selected ? 'var(--red-misu-10)' : 'var(--surface-card)',
      color: selected ? 'var(--accent-primary)' : 'var(--text-secondary)',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  tone = 'success',
  onClose
}) {
  const tones = {
    success: 'var(--success)',
    danger: 'var(--danger)',
    info: 'var(--antica-navy)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 18px',
      borderRadius: 'var(--radius-m)',
      background: 'var(--red-dark)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-s)',
      boxShadow: 'var(--shadow-raised)',
      borderLeft: `4px solid ${tones[tone]}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onClose && /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      opacity: 0.7
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  disabled,
  onClick,
  type = 'button'
}) {
  const pad = size === 'small' ? '8px 16px' : size === 'large' ? '16px 28px' : '12px 22px';
  const fontSize = size === 'small' ? 'var(--text-body-s)' : size === 'large' ? 'var(--text-body-l)' : 'var(--text-body-m)';
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    fontSize,
    padding: pad,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--accent-secondary)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: 'var(--accent-primary)',
      borderColor: 'var(--accent-primary)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  defaultChecked
}) {
  const [on, setOn] = React.useState(defaultChecked || false);
  const isChecked = checked !== undefined ? checked : on;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    },
    onClick: () => {
      setOn(!on);
      onChange && onChange(!isChecked);
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '6px',
      border: `2px solid ${isChecked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
      background: isChecked ? 'var(--accent-primary)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, isChecked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  placeholder,
  type = 'text',
  icon,
  error,
  defaultValue
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-s)',
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 14px',
      borderRadius: 'var(--radius-m)',
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--danger)' : focused ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
      boxShadow: focused ? '0 0 0 3px var(--red-misu-20)' : 'none',
      transition: 'all var(--duration-base) var(--ease-standard)'
    }
  }, icon, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    defaultValue: defaultValue,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      border: 'none',
      outline: 'none',
      flex: 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--text-primary)',
      background: 'transparent'
    }
  })), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    onChange: onChange,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    onClick: onChange,
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `2px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  defaultValue
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-s)',
      fontWeight: 500,
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    defaultValue: defaultValue,
    style: {
      padding: '10px 14px',
      borderRadius: 'var(--radius-m)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--text-primary)'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useState
} = React;
function Switch({
  label,
  defaultOn = false,
  onChange
}) {
  const [on, setOn] = useState(defaultOn);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-m)',
      color: 'var(--text-primary)',
      cursor: 'pointer'
    },
    onClick: () => {
      setOn(!on);
      onChange && onChange(!on);
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--accent-primary)' : 'var(--border-strong)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left var(--duration-base) var(--ease-standard)',
      boxShadow: '0 1px 3px rgba(0,0,0,.25)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  tabs = [],
  defaultIndex = 0
}) {
  const [active, setActive] = useState(defaultIndex);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '2px solid var(--border-subtle)'
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t.label,
    onClick: () => setActive(i),
    style: {
      padding: '10px 18px',
      fontWeight: 700,
      fontSize: 'var(--text-body-m)',
      cursor: 'pointer',
      color: i === active ? 'var(--accent-primary)' : 'var(--text-muted)',
      borderBottom: `2px solid ${i === active ? 'var(--accent-primary)' : 'transparent'}`,
      marginBottom: '-2px',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 4px',
      color: 'var(--text-primary)'
    }
  }, tabs[active] && tabs[active].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(42,20,16,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      fontFamily: 'var(--font-body)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-l)',
      padding: '28px',
      maxWidth: '420px',
      width: '90%',
      boxShadow: 'var(--shadow-pop)'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--accent-primary)',
      fontSize: '28px',
      margin: '0 0 12px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-primary)',
      fontSize: 'var(--text-body-m)',
      lineHeight: 'var(--leading-normal)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginTop: '20px',
      justifyContent: 'flex-end'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Cart.jsx
try { (() => {
const {
  useState
} = React;
function CartDrawer({
  open,
  onClose,
  cart,
  removeItem,
  setPage
}) {
  const {
    Button
  } = window.MisDesignSystem_1d9d19;
  const total = cart.reduce((s, i) => s + i.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(42,20,16,0.5)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--duration-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '380px',
      maxWidth: '90vw',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-pop)',
      transform: `translateX(${open ? '0' : '100%'})`,
      transition: 'transform var(--duration-slow) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--accent-primary)',
      fontSize: '26px',
      margin: 0
    }
  }, "Tu carrito"), /*#__PURE__*/React.createElement("span", {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      fontSize: 20
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, cart.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Tu carrito est\xE1 vac\xEDo."), cart.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid var(--border-subtle)',
      paddingBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-s)',
      color: 'var(--text-muted)'
    }
  }, "\u20A1", item.price.toLocaleString('es-CR'))), /*#__PURE__*/React.createElement("span", {
    onClick: () => removeItem(i),
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, "Quitar")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700,
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "\u20A1", total.toLocaleString('es-CR'))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "large",
    disabled: cart.length === 0,
    onClick: () => {
      onClose();
      setPage('checkout');
    }
  }, "Continuar"))));
}
function Checkout({
  cart,
  setPage
}) {
  const {
    Input,
    Radio,
    Button
  } = window.MisDesignSystem_1d9d19;
  const [method, setMethod] = useState('retiro');
  const [placed, setPlaced] = useState(false);
  const total = cart.reduce((s, i) => s + i.price, 0);
  if (placed) return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      margin: '80px auto',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--accent-primary)',
      fontSize: '48px'
    }
  }, "\xA1Pedido confirmado!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "El postre que siempre merece una pausa. Te avisaremos cuando est\xE9 listo para recoger."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setPage('home')
  }, "Volver al inicio")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600,
      margin: '0 auto',
      padding: '56px 24px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--accent-primary)',
      fontSize: '40px',
      margin: '0 0 24px'
    }
  }, "Finalizar pedido"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    placeholder: "t\xFA@correo.com"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "method",
    label: "Retiro en tienda",
    checked: method === 'retiro',
    onChange: () => setMethod('retiro')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "method",
    label: "Entrega a domicilio",
    checked: method === 'envio',
    onChange: () => setMethod('envio')
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-m)',
      padding: '16px 20px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "\u20A1", total.toLocaleString('es-CR')))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "large",
    onClick: () => setPlaced(true)
  }, "Confirmar pedido"));
}
Object.assign(window, {
  CartDrawer,
  Checkout
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Home.jsx
try { (() => {
function Home({
  setPage
}) {
  const B = window.MisDesignSystem_1d9d19.Button;
  const Badge = window.MisDesignSystem_1d9d19.Badge;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--red-misu)',
      color: '#fff',
      padding: '90px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "dark"
  }, "Un marchio di Antica Pizzeria Napoletana"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-xl)',
      margin: 0,
      lineHeight: 'var(--leading-tight)'
    }
  }, "Italia en cada", /*#__PURE__*/React.createElement("br", null), "cucharada."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 520,
      fontSize: 'var(--text-body-l)',
      opacity: .92
    }
  }, "El aut\xE9ntico tiramis\xFA italiano, para llevar. Elaborado a mano con la receta y la pasi\xF3n de Antica Pizzeria Napoletana."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-pill)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    variant: "ghost",
    size: "large",
    onClick: () => setPage('menu')
  }, "Ver men\xFA")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('menu'),
    style: {
      background: 'var(--red-dark)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '16px 28px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-body-l)',
      cursor: 'pointer'
    }
  }, "Ordenar ahora"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '32px'
    }
  }, [['Autenticidad', 'Respetamos las recetas y tradiciones italianas que inspiran cada uno de nuestros productos.'], ['Simplicidad', 'Los mejores postres no necesitan complicaciones: solo ingredientes reales y una ejecución impecable.'], ['Pasión', 'Nacemos de la experiencia y el amor por la gastronomía italiana de Antica Pizzeria Napoletana.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--accent-primary)',
      fontSize: '32px',
      margin: '0 0 8px'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-normal)',
      margin: 0
    }
  }, d)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--beige-secundario)',
      padding: '72px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '48px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/ivan-sala-badge.png",
    style: {
      width: 180
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--red-dark)',
      fontSize: '44px',
      margin: '0 0 12px'
    }
  }, "Respaldado por un maestro pizzero"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: 560,
      lineHeight: 'var(--leading-normal)'
    }
  }, "Mis\xF9 nace de la experiencia de Ivan Sala y Antica Pizzeria Napoletana \u2014 m\xE1s de un siglo de tradici\xF3n italiana en Costa Rica.")))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Menu.jsx
try { (() => {
const {
  useState
} = React;
const PRODUCTS = [{
  id: 1,
  cat: 'Clásico',
  name: 'Tiramisú Original',
  desc: 'Mascarpone, café espresso, cacao.',
  price: 2900,
  eyebrow: 'Clásico'
}, {
  id: 2,
  cat: 'Nuevo',
  name: 'Tiramisú Pistacho',
  desc: 'Crema de pistacho, bizcocho, cacao.',
  price: 3200,
  eyebrow: 'Nuevo'
}, {
  id: 3,
  cat: 'Clásico',
  name: 'Tiramisú Chocolate',
  desc: 'Cacao intenso, mascarpone, avellanas.',
  price: 3100,
  eyebrow: 'Clásico'
}, {
  id: 4,
  cat: 'Para compartir',
  name: 'Tiramisú Familiar',
  desc: 'Presentación grande para compartir.',
  price: 6900,
  eyebrow: 'Para compartir'
}, {
  id: 5,
  cat: 'Bebidas',
  name: 'Espresso',
  desc: 'Café italiano de origen.',
  price: 1200,
  eyebrow: 'Bebidas'
}, {
  id: 6,
  cat: 'Bebidas',
  name: 'Cappuccino',
  desc: 'Espresso, leche vaporizada, cacao.',
  price: 1500,
  eyebrow: 'Bebidas'
}];
const CATS = ['Todos', 'Clásico', 'Nuevo', 'Para compartir', 'Bebidas'];
function Menu({
  addToCart
}) {
  const {
    Card,
    Tag,
    Button
  } = window.MisDesignSystem_1d9d19;
  const [cat, setCat] = useState('Todos');
  const items = cat === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--accent-primary)',
      fontSize: 'var(--text-display-m)',
      margin: '0 0 8px'
    }
  }, "Nuestro men\xFA"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      margin: '0 0 24px'
    }
  }, "Un antojo dulce, un detalle para regalar, un capricho personal \u2014 siempre aut\xE9ntico."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginBottom: '32px',
      flexWrap: 'wrap'
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
      gap: '24px'
    }
  }, items.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    eyebrow: p.eyebrow,
    title: p.name,
    description: p.desc,
    price: `₡${p.price.toLocaleString('es-CR')}`,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "small",
      onClick: () => addToCart(p)
    }, "Agregar")
  }))));
}
window.Menu = Menu;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Menu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Shell.jsx
try { (() => {
function Header({
  page,
  setPage,
  cartCount,
  onCart
}) {
  const navItems = [['home', 'Inicio'], ['menu', 'Menú'], ['about', 'Nosotros']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '34px',
      color: 'var(--accent-primary)',
      cursor: 'pointer'
    },
    onClick: () => setPage('home')
  }, "Mis\xF9"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '28px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-body-m)'
    }
  }, navItems.map(([key, label]) => /*#__PURE__*/React.createElement("span", {
    key: key,
    onClick: () => setPage(key),
    style: {
      cursor: 'pointer',
      color: page === key ? 'var(--accent-primary)' : 'var(--text-primary)'
    }
  }, label))), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      position: 'relative',
      background: 'var(--accent-primary)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 20px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "Carrito", cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      background: 'var(--red-dark)',
      color: '#fff',
      borderRadius: '50%',
      width: 22,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12
    }
  }, cartCount))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--red-dark)',
      color: '#fff',
      marginTop: '80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '24px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '30px',
      color: 'var(--beige-rojizo)'
    }
  }, "Mis\xF9"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 280,
      opacity: .8,
      fontSize: 'var(--text-body-s)'
    }
  }, "Un marchio di Antica Pizzeria Napoletana. Costa Rica.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-s)',
      opacity: .85,
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "San Jos\xE9, Costa Rica"), /*#__PURE__*/React.createElement("span", null, "hola@misu.cr"), /*#__PURE__*/React.createElement("span", null, "+506 0000 0000"))));
}
Object.assign(window, {
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
