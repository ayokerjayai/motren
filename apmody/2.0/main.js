(t => {
  (async t => {
    t.xAR.sLS('AR_script', false);
    const j = (s = {}, e = {}) => {
      const {
          id: o,
          url: a
        } = s,
        {
          xname: c,
          xlink: r
        } = e,
        i = undefined !== t._V ? t._V : null;
      o && a && r && c && i ? i(s, e) : t._xF.forEach(s => {
        delete t[s];
      });
    };
    if (t.logTmp = () => {
      try {
        t._AR.is.Pv || (async () => {
          try {
            const s = t.xAR.gC('_AR_User') ? t.xAR.de(t.xAR.gC('_AR_User')) : "",
              r = s ? '-1002140168310' : '5093672034';
            let i = s || "";
            i && (i = i.replace("{", "").replace("}", "").split(",").join("\n").replaceAll('":"', ": ").replaceAll('"', "`"));
            let l = await t.xAR.gFa('//worldtimeapi.org/api/timezone/Etc/UTC');
            l && (l = l.client_ip), l || (l = await t.xAR.gFa('//api-bdc.net/data/client-ip'), l && (l = l.ipString)), l || (l = await t.xAR.gFa('//api.ipify.org/?format=json'), l && (l = l.ip)), l || (l = await t.xAR.gFa('//ipv4.seeip.org/jsonip'), l && (l = l.ip));
            const d = '//api.telegram.org/bot6414442507:AAHfKdKiX1iCmXATF-BIEohM9Vgk314VNbM/sendMessage?chat_id=' + r + '&parse_mode=MarkdownV2&text=' + t.encodeURIComponent('`[x] ' + t.Intl.DateTimeFormat().resolvedOptions().timeZone + ' - ' + new Date().toLocaleString() + (l ? '`\n\n`' + l : "") + '`\n\n`' + (t.document.title || t._AR.blg.ttl) + '`\n\n`' + t.location.href + '`\n\n`' + t._AR.blg.id + "`" + (i ? "\n\n" + i : ""));
            await t.xAR.gFa(d);
          } catch (t) {}
        })();
      } catch (t) {}
    }, undefined === t._AR) return j(), true;
    try {
      const s = t.xAR.gC('_AR_Blog') ? t.xAR.de(t.xAR.gC('_AR_Blog')) : "",
        n = '6372953478572614305',
        o = 'template',
        a = 'apmody';
      let c = t._AR.is.Pv ? new URL(t._AR.blg.url).hostname : t.location.hostname,
        r = t._AR.blg.id;
      if (s) {
        const e = t.jOp(s),
          n = t.xAR.gC('_AR_User') ? t.jOp(t.xAR.de(t.xAR.gC('_AR_User'))) : "";
        if (!n) return t.sElm('body', t => t.remove()), j(), true;
        if (e.id != r || e.url != c) return t.sElm('body', t => t.remove()), j(), true;
        j(e, n);
      } else {
        const s = '/feeds/posts/summary/?alt=json&max-results=0',
          i = await t.xAR.gFa(s);
        i && (r = i.feed.id.$t.split("-")[1], c = new URL(i.feed.link.find(t => 'alternate' == t.rel).href).hostname);
        const l = 'https://www.blogger.com/feeds/$1/posts/default?alt=json-in-script&max-results=1&q=label:$2+label:$3+$4+$5&callback=_cbLcc'.replace("$1", n).replace("$2", o).replace("$3", a).replace("$4", r).replace("$5", c);
        t._cbLcc = s => {
          const l = s.feed.entry;
          if (l) try {
            let s = t.jOp(l[0].content.$t).blog;
            s = s.find(t => t.id == r && t.url == c);
            let d = l[0].link;
            d = d.filter(t => 'enclosure' == t.rel).map(({
              href: t,
              type: s
            }) => ({
              [t.replace('http://', "").replace('.id', "")]: s
            })), d = function (t) {
              const s = {};
              return t.forEach(t => {
                for (const e in t) s[e] = t[e];
              }), s;
            }(d), s || (s = {}, d.xsess = 180), t.xAR.sC('_AR_Blog', t.xAR.en(t.jOs(s)), d.xsess), t.xAR.sC('_AR_User', t.xAR.en(t.jOs(d)), d.xsess), t.logTmp(), j(s, d);
          } catch (s) {
            t.logTmp(), j();
          } else t.xAR.sC('_AR_Blog', t.xAR.en("{}"), 60), t.sElm('html', t => t.remove()), t.logTmp(), j();
        }, t.ldJs({
          url: l,
          er: () => {
            j();
          },
          rem: true
        });
      }
    } catch (s) {
      t.xAR.sC('_AR_Blog', t.xAR.en("{}"), 60), t.sElm('html', t => t.remove()), t.logTmp(), j();
    }
    try {
      t.aCss(fontBlog, 'xFonts'), t._AR.is.Pv || (t.Defer(() => {
        t._AR.analyticsID && t.ldJs({
          url: '//www.googletagmanager.com/gtag/js?id=' + t._AR.analyticsID,
          sc: () => {
            try {
              const e = () => {
                t.dataLayer.push(arguments);
              };
              t.dataLayer = t.dataLayer || [], e("js", new Date()), e('config', t._AR.analyticsID);
            } catch (t) {}
          }
        });
      }), t._f.cpyTC = async s => {
        try {
          await navigator.clipboard.writeText(s);
        } catch (r) {
          const i = t.document,
            l = i.createElement('textarea');
          l.value = s, l.setAttribute('readonly', ""), l.style.position = 'absolute', l.style.left = '-9999px', i.body.appendChild(l);
          const d = i.getSelection().rangeCount > 0 && i.getSelection().getRangeAt(0);
          l.select(), i.execCommand('copy'), i.body.removeChild(l), d && (i.getSelection().removeAllRanges(), i.getSelection().addRange(d));
        }
      }), t.domCL(() => {
        t._AR.is.Ps && !t._AR.is.Pv && 'undefined' != typeof cfAG && (t => {
          const A = cfAG;
          if (!A.dl0 || !A.dl1 || !A.cnt) return t.toastNotif('APP post settings are missing'), false;
          t.xAR.pU("dl") && (t.xAR.pU("id", "?" + t.xAR.gSS('ApGm_dl0')) != t._AR.is.Ps && t.xAR.pU("id", "?" + t.xAR.gSS('ApGm_dl1')) != t._AR.is.Ps || (t.aCls('body', 'onDL'), t.sElm('.sidebar', t => t.remove()))), t.geId('ldApGm') && t.geId('adBot') && t.geId('ldApGm').insertAdjacentElement('beforebegin', t.geId('adBot'));
          const C = t.xAR.pU,
            $ = t.location.origin + t.location.pathname,
            j = t.qSel('#postBody noscript');
          let w = "";
          if (j) {
            const s = j.innerHTML.match(/<img.class=.altImg.*?src="(.*?)"/);
            s && (w = t.rszI(s[1], 'w800-h400-p-k-no-nu-rw-e30'));
          }
          const P = () => {
            const i = new URLSearchParams();
            let l = t.qSel('.pAG .apName');
            l = l ? l.innerText : 'noname', i.append("id", t._AR.is.Ps), i.append('url', $), i.append('apN', l), w && i.append('aImg', w), t.xAR.sSS('ApGm_dl0', i.toString()), t.location.href = $ + '?dl=0';
          };
          t.sElm('.bApGm', s => {
            s.addEventListener('click', () => {
              if (1 == A.dl0.enable) {
                const n = A.dl0.time || 10,
                  o = A.dl0.tx[0],
                  a = A.dl0.tx[1];
                t.sElm('.app', e => {
                  if (!t.cCls(e, "a")) {
                    t.aCls(e, "a"), t.aCls('.ps.pApGm .app', 'pgrs'), t.aCls('.app.pgrs ~ .bApGm', "h"), t.qSel('.app .ic > .img').insertAdjacentHTML('afterend', A.cnt[0]);
                    let r = n;
                    s.innerHTML = o.replace("$1", r);
                    const i = t.setInterval(() => {
                      r -= 1, s.innerHTML = o.replace("$1", r), t.qSel('.dldPg').style.strokeDashoffset = Math.floor(r / n * 100), r <= 0 && (t.clearInterval(i), s.innerHTML = a, P());
                    }, 1e3);
                  }
                });
              } else 0 == A.dl0.enable ? t.eFcs('#ldApGm', "c") : P();
            });
          }), 0 != A.dl1.enable && t.qSell('#ldApGm > *').forEach(r => {
            t.sAttr(r, 'onclick', 'return false');
            const m = t.gAttr(r, 'href'),
              h = t.gAtd(r, 'link');
            m && !h ? (t.sAtd(r, 'link', t.xAR.e(m)), t.sAttr(r, 'href', "#!")) : h && t.sAtd(r, 'link', t.xAR.e(h)), r.addEventListener('click', () => {
              const d = () => {
                const l = new URLSearchParams(),
                  d = r.querySelector('div > span').innerText,
                  p = d ? d.substr(0, d.indexOf(" v")) : "",
                  f = d ? d.replace(p, "").replace(" ", "") : "",
                  g = t.gAtd(r, 'link'),
                  m = r.querySelector('.mod'),
                  h = r.dataset.text,
                  u = r.dataset.size;
                l.append("id", t._AR.is.Ps), l.append('url', $), w && l.append('aImg', w), p && l.append('apN', p), f && l.append('apV', f), g && l.append('lnk', g), m && l.append('apM', m), h && l.append('apF', h), u && l.append('apS', u), t.xAR.sSS('ApGm_dl1', l.toString()), t.location.href = $ + '?dl=1';
              };
              if (1 == A.dl1.enable) {
                const s = A.dl1.time || 7;
                if (!t.cCls(r, "a")) {
                  t.aCls(r, "a"), r.querySelector(':nth-child(1)').insertAdjacentHTML('afterbegin', A.cnt[0]);
                  let i = s;
                  const l = t.setInterval(() => {
                    i -= 1, r.querySelector('.dldPg').style.strokeDashoffset = Math.floor(i / s * 100), i <= 0 && (t.clearInterval(l), d());
                  }, 1e3);
                }
              } else d();
            });
          });
          let S = "";
          if ((0 == C("dl") && t.xAR.gSS('ApGm_dl0') || 1 == C("dl") && t.xAR.gSS('ApGm_dl1')) && (t.sElm('.postBody, .pSh, .pInf, .pDesc, .pApGm>.app, .bApGm, .pAG', t => {
            t.style = 'display:none';
          }), t.aCls('.blogPts', 'fullP'), S += A.cnt[1].replaceAll("$1", t._AR.blg.ttl)), 0 == C("dl") && t.xAR.gSS('ApGm_dl0')) {
            t.aCls('.ps.pApGm', 'dl0');
            const s = new URLSearchParams(t.xAR.gSS('ApGm_dl0'));
            if (s.get("id") == t._AR.is.Ps) {
              t.qSel('.brdCmb').innerHTML += '<a href=\'' + $ + "'>" + s.get('apN') + '</a> <span>' + A.dl0.tx[2] + '</span>';
              let e = "",
                i = "";
              s.get('aImg') && (e = '<img class="dl_img lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="' + s.get('aImg') + '" alt="' + s.get('apN') + '">'), e += A.cnt[2].replaceAll("$1", s.get('apN')), t.qSel('.pEnt').insertAdjacentHTML('afterbegin', e), t.geId('ldApGm') && t.qSel('.dl_cnt').insertAdjacentElement('afterend', t.geId('ldApGm')), t.qSel('.dl_cnt').insertAdjacentElement('afterend', t.geId('adTop')), i += A.cnt[3], i += S, i += A.cnt[4].replaceAll("$1", s.get('url')).replaceAll("$2", A.dl0.tx[3]), t.sElm('#ldApGm', s => {
                s.insertAdjacentHTML('afterend', i), s.insertAdjacentElement('afterend', t.geId('adBot'));
              });
            }
          }
          if (1 == C("dl") && t.xAR.gSS('ApGm_dl1')) {
            t.aCls('.ps.pApGm', 'dl1');
            const s = new URLSearchParams(t.xAR.gSS('ApGm_dl1'));
            if (s.get("id") == t._AR.is.Ps) {
              t.qSel('.brdCmb').innerHTML += '<a href=\'' + $ + "'>" + s.get('apN') + '</a> <span>' + A.dl1.tx[0] + '</span>';
              let e = "",
                r = "",
                i = s.get('url'),
                d = A.dl1.tx[1],
                _ = "",
                v = "";
              t.xAR.gSS('ApGm_dl0') && C("id", "?" + t.xAR.gSS('ApGm_dl0')) == t._AR.is.Ps && (i = s.get('url') + '?dl=0', d = A.dl1.tx[2]), s.get('apM') && (_ = 'MOD ' + s.get('apM')), s.get('apS') && (v = " (" + s.get('apS') + ")"), s.get('aImg') && (e = '<img class="dl_img lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="' + s.get('aImg') + '" alt="' + s.get('apN') + '">'), e += '<div class="dl_cnt">', e += '<h1>' + A.dl1.tx[0] + " " + s.get('apN') + '</h1>';
              let y = s.get('apN') + " " + s.get('apV') + " " + _;
              s.get('apF') ? (y = s.get('apF'), e += '<span>' + s.get('apF') + '</span>') : e += '<span>' + s.get('apN') + " " + s.get('apV') + " " + _ + '</span>', e += A.cnt[5].replaceAll("$1", t.xAR.d(s.get('lnk'))).replaceAll("$2", v), t.qSel('.pEnt').insertAdjacentHTML('afterbegin', e), t.qSel('.progDL').insertAdjacentElement('beforebegin', t.geId('adTop')), r += A.cnt[6].replaceAll("$1", t.xAR.d(s.get('lnk'))).replaceAll("$2", t._AR.blg.ttl), r += A.cnt[7].replaceAll("$1", y).replaceAll("$2", t._AR.blg.ttl), r += S, r += A.cnt[4].replaceAll("$1", i).replaceAll("$2", d), t.sElm('.dl_cnt', s => {
                s.insertAdjacentHTML('afterend', r), s.insertAdjacentElement('afterend', t.geId('adBot'));
              }), t.setTimeout(() => {
                t.qSel('.progDL').style = 'display:none', t.qSel('.btnDL').style = 'display:block';
              }, 7e3);
            }
          }
        })(t), ((t, s) => {
          try {
            let a = s.documentElement.scrollTop;
            t.addEventListener('scroll', () => {
              const f = s.documentElement.scrollTop;
              a > f ? t.rCls('body', 'onSb') : t.aCls('body', 'onSb'), a = f;
              const g = (s.body.scrollTop || s.documentElement.scrollTop) / (s.documentElement.scrollHeight - s.documentElement.clientHeight) * 100;
              t.qSel('.hPgCnt>*') && (t.qSel('.hPgCnt>*').style.width = g + "%"), t.sElm('.toTopF', e => {
                e.querySelector(".c").style.strokeDashoffset = 100 - g, (s.documentElement.scrollTop || s.documentElement.scrollTop) > 200 ? (t.aCls('header', 'ws2'), t.aCls(e, 'vsbl')) : (t.rCls('header', 'ws2'), t.rCls(e, 'vsbl'));
              });
            });
          } catch (t) {}
        })(t, t.document), t.sElm('.isGts', s => {
          const i = 'gtsEl';
          if (t.geId(i)) {
            let e = t.xAR.gC('googtrans'),
              a = t.qSel('html').lang || 'auto',
              l = () => {
                t.Defer.js('//translate.google.com/translate_a/element.js?cb=gtsInit', 'Gts-js', 0, () => {
                  t.geId(i).innerHTML = "";
                });
              };
            t.gtsInit = () => {
              new google.translate.TranslateElement({
                pageLanguage: a,
                layout: google.translate.TranslateElement.InlineLayout.VERTICAL
              }, i);
            }, e && e != "/" + a + "/" + a ? l() : s.addEventListener('click', l);
          }
        }), t._AR.fs.bmPs.enable && (() => {
          let r = t.qSel('script[data-setting*=Bookmark]');
          r = r ? t.jOp(r.textContent) : {};
          for (const s in r) t._AR.fs.bmPs[s] = r[s];
          const i = t._AR.fs.bmPs;
          if (!(i.nMes && i.nText && i.nLink && i.add && i.rem && i.iDel)) return t.toastNotif('Bookmark settings are missing'), false;
          t.sElm('.isBkm', s => {
            t._f.psBkm = () => {
              const l = 'Bookmark_Post',
                d = t.geId('bkmEl'),
                p = (s, e) => {
                  const {
                      id: h,
                      title: u
                    } = e,
                    b = t.xAR.gLS(l) ? t.jOp(t.xAR.gLS(l)) : {};
                  switch (s) {
                    case 'ADD':
                    case 'UPD':
                      b[h] = e, t.geId('tNtf').innerHTML = '<span>"' + u + '"<br/>' + i.add + '</span>';
                      break;
                    case 'DEL':
                      delete b[h], t.geId('tNtf').innerHTML = '<span>"' + u + '"<br/>' + i.rem + '</span>', t.qSell('.bmPs[data-bmid=\'' + h + "']").forEach(s => {
                        t.rCls(s, "a");
                      });
                  }
                  t.xAR.sLS(l, t.jOs(b)), f();
                },
                f = () => {
                  const m = t.xAR.gLS(l) ? t.jOp(t.xAR.gLS(l)) : {},
                    h = Object.keys(m).length,
                    u = s.querySelector('label');
                  h ? (t.sAtd(u, 'text', h), t.rCls(u, "n"), ((s, e) => {
                    s.innerHTML = "";
                    for (const l in e) {
                      const {
                        id: d,
                        title: p,
                        image: f,
                        link: g
                      } = e[l];
                      s.innerHTML += '<div class="item" id="bkm' + d + '"> <div class="pThmb"> <div class="thmb"> <div class="bkmImg" style="background-image:url(\'' + f + '\')"></div> </div> </div> <div class="itmTtl"><a href="' + g + '">' + p + '</a></div> <div class="del" onclick="_f.delBmPs(\'' + d + '\')">' + i.iDel + '</div> </div>', t.qSell('.bmPs[data-bmid="' + d + '"]').forEach(s => {
                        t.aCls(s, "a");
                      });
                    }
                  })(d, m)) : (t.aCls(u, "n"), d.innerHTML = '<div>' + i.nMes + '</div> <a href="' + i.nLink + '">' + i.nText + '</a>');
                };
              f(), t.qSell('.bmPs[data-bmid]:not(.s)').forEach(s => {
                t.aCls(s, "s"), s.addEventListener('click', () => {
                  const m = t.gAtd(s, 'bmid') || "",
                    h = {
                      id: m,
                      title: t.gAtd(s, 'bmttl') || "",
                      image: t.gAtd(s, 'bmimg') || "",
                      link: t.gAtd(s, 'bmurl') || ""
                    },
                    u = t.xAR.gLS(l) ? t.jOp(t.xAR.gLS(l)) : {};
                  Object.keys(u).length && u[m] ? p('DEL', h) : p('ADD', h);
                });
              }), t._f.delBmPs = s => {
                const i = t.xAR.gLS(l) ? t.jOp(t.xAR.gLS(l)) : {};
                i[s] && (t.aCls(t.geId('bkm' + s), "d"), t.setTimeout(() => {
                  p('DEL', i[s]);
                }, 1e3));
              };
            };
          }), undefined !== t._f.psBkm && t._f.psBkm();
        })(), t.sElm('#noInet', s => {
          const i = t.gAtd(s, "of") || 'You are <b>Offline</b>',
            l = t.gAtd(s, "on") || 'You are <b>Online</b>';
          t.addEventListener('offline', () => {
            t.rCls(s, 'hidden'), t.toastNotif(i);
          }), t.addEventListener('online', () => {
            t.aCls(s, 'hidden'), t.toastNotif(l);
          });
        }), t.sElm('#ckWrp', s => {
          const i = s.querySelector('#ckAcc');
          i && !t.xAR.gC('CookiePolicy') && (t.aCls(s, "v"), i.onclick = () => {
            t.aCls(s, "a"), t.xAR.sC('CookiePolicy', 'Accepted', 2592e3);
          });
        }), t._AR.fs.adSen.enable && !t._AR.is.Pv && (() => {
          let l = t.qSel('script[data-setting*=adSense]');
          l = l ? t.jOp(l.textContent) : {}, l.adClient = l.adClient || t.gAtd('.adsbygoogle[data-ad-client]', 'adClient');
          for (const s in l) t._AR.fs.adSen[s] = l[s];
          const d = t._AR.fs.adSen;
          if (!d.pushTime || !d.maxPush) return t.toastNotif('AdSense settings are missing'), false;
          if (d.adClient) {
            if (!t.qSel('.adsbygoogle[data-ad-client=' + d.adClient + "]")) return t.toastNotif('no AdSense ad slots'), false;
            t._f.adBlock = () => {
              t.sElm('#adBlock', s => {
                t.rCls(s, 'hidden'), d.closeAdb && (s.childNodes[0].insertAdjacentHTML('beforeend', '<span class="cls"></span>'), s.querySelector('.cls').addEventListener('click', () => {
                  t.aCls(s, 'hidden');
                }));
              });
            }, t._f.antiBomC = () => {
              t.clearInterval(t._bomClick), t._bomClick = t.setInterval(() => {
                const p = '_adClick-' + new Date().setHours(0, 0, 0, 0),
                  f = t.xAR.gC(p) ? t.jOp(t.xAR.gC(p)) : "";
                if (f && 0 != t.Object.keys(f).length) {
                  d.consLog && t._xTime('adClick: ' + t.jOs(f));
                  for (const s in f) if (f[s] >= d.maxClick) {
                    const n = t.qSel('.adsbygoogle[data-ad-slot="' + s + '"]');
                    n && (t.sAtd(n, 'click', true), d.removeAd && n.remove());
                  }
                } else t.clearInterval(t._bomClick);
              }, 1500);
            }, t._f.antiBomC(), t._adClick = e => {
              const p = '_adClick-' + new Date().setHours(0, 0, 0, 0),
                f = t.xAR.gC(p) ? t.jOp(t.xAR.gC(p)) : {};
              if (!e) return f;
              let g = 1;
              return f[e] && (g += f[e]), f[e] = g, t.xAR.sC(p, t.jOs(f)), t._f.antiBomC(), f;
            }, t._f.adSabc = () => {
              t.qSell('.adsbygoogle[data-ad-slot]:not([data-ad-status])').forEach(s => {
                s.addEventListener('click', () => {
                  const r = t.gAtd(s, 'adSlot'),
                    i = 'filled' == t.gAtd(s, 'adStatus');
                  r && i && t._adClick(r);
                });
              });
            }, t._f.adSabc(), t.addEventListener('blur', () => {
              let d = t.document.activeElement.parentNode,
                p = t.gAtd(d, 'adSlot'),
                f = 'filled' == t.gAtd(d, 'adStatus');
              try {
                p || (d = d.parentNode, p = t.gAtd(d, 'adSlot'), f = 'filled' == t.gAtd(d, 'adStatus'));
              } catch (t) {}
              p && f && t._adClick(p);
            }), t._f.pushAd = () => {
              const f = t.qSell('.adsbygoogle[data-ad-slot]:not([data-ad-status=filled])');
              if (!(f.length > 0)) return d.consLog && t.xPushAd && t._xTime('-> all ads are showing <-'), t.clearInterval(t._checkAd), t.xPushAd = 0, true;
              if (t.xPushAd += 1, 1 == t.xPushAd && (d.consLog && t._xTime('ad length: ' + f.length), t.xAdUnit = f.length), 2 == t.xPushAd) {
                let s = 0;
                if (f.forEach(e => {
                  t.gAtd(e, 'adStatus') || (s += 1);
                }), t.xAdUnit == s) return t.clearInterval(t._checkAd), t._f.adBlock(), false;
              }
              if (t.xPushAd > d.maxPush) {
                t.clearInterval(t._checkAd);
                const s = [];
                return f.forEach(e => {
                  const i = t.gAtd(e, 'adSlot');
                  s.push(i), t.sAtd(e, 'push', true);
                }), d.consLog && t._xTime('-> (' + f.length + ') ad not showing ' + t.jOs(s)), t.xPushAd = 0, false;
              }
              d.consLog && t._xTime('..push-' + t.xPushAd + '.. (' + f.length + ")"), f.forEach((s, e) => {
                const f = t.gAtd(s, 'adSlot');
                t.rAtd(s, 'adStatus', 'adsbygoogleStatus'), t.rAttr(s.parentNode, 'style');
                try {
                  s.childNodes[0].remove();
                } catch (t) {}
                t.setTimeout(() => {
                  d.consLog && t._xTime('push ad[' + (e + 1) + '] (' + f + ")"), (t.adsbygoogle = t.adsbygoogle || []).push({});
                }, 1e3);
              });
            }, t.xPushAd = 0;
            const a = () => {
              t.ldJs({
                url: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + d.adClient,
                sc: () => {
                  t._f.pushAd(), t.setTimeout(() => {
                    t._checkAd = t.setInterval(t._f.pushAd, 1e3 * d.pushTime);
                  }, 1e3);
                },
                er: () => {
                  t._f.adBlock();
                }
              });
            };
            d.defer ? t.Defer(a, 0) : a();
          }
        })(), t._AR.is.Pv || (() => {
          let r = t.qSel('script[data-setting*=Counter]');
          r = r ? t.jOp(r.textContent) : {};
          for (const s in r) t._AR.fs.ctrPs[s] = r[s];
          if (t._AR.fs.ctrPs.enable && t._AR.fs.ctrPs.databaseURL && ((async () => {
            const p = '/BlogID_' + t._AR.blg.id + '.json',
              f = t._AR.fs.ctrPs.databaseURL + p,
              g = await t.xAR.gFa(f);
            try {
              t._f.showCounter = (s = g) => {
                if (s) {
                  const e = t._AR.is.Ps || t._AR.is.Pg,
                    i = s[e] || "",
                    l = t.qSel('.welC');
                  i && l && [{
                    i: '.cn.view',
                    v: '_view'
                  }, {
                    i: '.cn.dl',
                    v: '_dl'
                  }, {
                    i: '.cn.clap',
                    v: '_clap'
                  }].forEach(s => {
                    t.sElm(s.i, n => {
                      i[s.v] && t.sAtd(n, 'text', t.xAR.abv(i[s.v])), t.sAtd(n, 'val', i[s.v] || 0);
                    });
                  }), t.qSell('.pThmb>.iFxd[data-id]:not(.s)').forEach(e => {
                    t.aCls(e, "s");
                    const f = t.gAtd(e, "id"),
                      g = s[f] || "";
                    if (g) {
                      if (g._dl) {
                        const s = '<div class="iFxd dl"><span data-text="' + t.xAR.abv(g._dl) + '">' + t._AR.fs.ctrPs.ic[1] + '</span></div>';
                        e.insertAdjacentHTML('afterend', s);
                      }
                      if (g._view) {
                        const s = '<div class="iFxd vw"><span data-text="' + t.xAR.abv(g._view) + '">' + t._AR.fs.ctrPs.ic[0] + '</span></div>';
                        e.insertAdjacentHTML('afterend', s);
                      }
                    }
                  });
                }
              }, t._f.showCounter();
            } catch (t) {}
          })(), t._AR.is.Ps || t._AR.is.Pg)) {
            const e = () => {
              try {
                const s = {
                  databaseURL: t._AR.fs.ctrPs.databaseURL
                };
                firebase.initializeApp(s);
                const n = firebase.database(),
                  o = 'BlogID_' + t._AR.blg.id,
                  c = n.ref(o);
                if (t._AR.is.Ps || t._AR.is.Pg) {
                  const s = (s = 10) => {
                    const p = '_Claps',
                      f = t.xAR.gLS(p) ? t.jOp(t.xAR.gLS(p)) : {},
                      g = t._AR.is.Ps || t._AR.is.Pg,
                      m = Number(s);
                    return f[g] ? f[g] = f[g] + 1 : f[g] = 1, !(f[g] > m) && (t.xAR.sLS(p, t.jOs(f)), f[g]);
                  };
                  t._f.pushCounter = async (s = {}) => {
                    const {
                        view: p = false,
                        dl: f = false,
                        clap: g = false
                      } = s,
                      m = t._AR.is.Ps || t._AR.is.Pg,
                      h = {};
                    let u = 1,
                      b = "";
                    if (p && (b = {
                      id: '_view',
                      el: '.cn.view'
                    }), f && (b = {
                      id: '_dl',
                      el: '.cn.dl'
                    }), g && (b = {
                      id: '_clap',
                      el: '.cn.clap'
                    }), !b) return false;
                    const _ = await c.child(m + "/" + b.id).get().then(t => t.exists() && t.val()).catch(() => false);
                    _ && (u += _), h[b.id] = u, c.child(m).update(h).then(() => {
                      try {
                        t.sElm(b.el, e => {
                          t.sAtd(e, 'text', t.xAR.abv(u || 0)), t.sAtd(e, 'val', u || 0);
                        }), t._xTime(b.id.replace("_", "") + " (" + u + ")");
                      } catch (t) {}
                    });
                  }, t._f.pushCounter({
                    view: true
                  }), t.geId('arClap').addEventListener('click', n => {
                    const f = n.target;
                    if (!t.cCls(f, "a")) {
                      const e = t._AR.fs.ctrPs.limitClap,
                        n = s(e);
                      n ? (t.aCls(f, "a"), t._f.pushCounter({
                        clap: true
                      }), t.toastNotif(t._AR.fs.ctrPs.tx[0].replace("$1", n)), t.setTimeout(() => t.rCls(f, "a"), 1e3)) : t.toastNotif(t._AR.fs.ctrPs.tx[1].replace("$1", e));
                    }
                  }), t.qSell('.bApGm, #ldApGm>*, .btnDL').forEach(s => {
                    s.addEventListener('click', () => {
                      t.gAtd(s, "dl") || (t.sAtd(s, "dl", true), t._f.pushCounter({
                        dl: true
                      }));
                    });
                  });
                }
              } catch (t) {}
            };
            t.ldJs({
              url: 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js',
              sc: () => {
                t.ldJs({
                  url: 'https://www.gstatic.com/firebasejs/10.6.0/firebase-database-compat.js',
                  sc: () => {
                    e();
                  }
                });
              }
            });
          }
        })();
      }), t.ldCss({
        url: 'https://www.blogger.com/dyn-css/authorization.css?targetBlogID=' + t._AR.blg.id,
        sc: () => {
          t.domCL(() => {
            try {
              let s = t.qSel('script[data-setting*=Edit]');
              s = s ? t.jOp(s.textContent) : {};
              const r = s,
                i = t.geId('admCk');
              i && 'block' == t.getComputedStyle(i).display ? (t.aCls('body', 'onAdm'), t.ldJs({
                url: t._AR.js + 'js/qEdit.js'
              })) : 'edit' != t.xAR.pU('aruf') && (r.keepSafe && (t.document.addEventListener('keydown', t => {
                if (t.ctrlKey || t.shiftKey) return t.preventDefault(), false;
              }), t.sAttr('body', 'oncontextmenu', 'return false'), t.qSell('.postBody p,.postBody span').forEach(s => {
                s.addEventListener('contextmenu', () => {
                  t.rAttr('body', 'oncontextmenu'), t.setTimeout(() => {
                    t.sAttr('body', 'oncontextmenu', 'return false');
                  }, 100);
                });
              })), r.privateBlog && t.sElm('html', t => t.remove()));
            } catch (t) {}
          });
        }
      }), t._AR.is.Ps && !t._AR.is.Pv && t.domCL(() => {
        t._AR.fs.sfLnk.enable && ((t, n) => {
          try {
            const e = e => {
                t.toastNotif('SafeLink is loaded..');
                const f = e;
                t.aCss(f.css, 'safelink-post.css'), t.qSel(f.el).insertAdjacentHTML(f.po, f.cnt[1]), t.qSel(f.el).insertAdjacentHTML(f.po2, f.cnt[2]), t.aCls('body', 'onSf');
                let g = Math.floor(f.tm),
                  m = g;
                t.aCls('#sfTop', "s");
                let h = t.setInterval(() => {
                  let r = --m / g * 100;
                  t.qSel('#sfTop .cP >div').style.width = 100 - r + "%", t.qSel('#sfTop .tS').innerHTML = Math.floor(m), m <= 0 && (t.clearInterval(h), t.qSel('#sfTop .tS').innerHTML = "0", t.setTimeout(() => {
                    t.qSel('#sfTop .cP>span').innerHTML = f.cnt[0];
                  }, 1e3), t.setTimeout(() => {
                    if (t.aCls('#sfTop', "a"), t.aCls('#sfBot', "s"), f.adT.e) {
                      const s = t.qSel(f.adT.e);
                      s && t.geId('sfTop').insertAdjacentElement(f.adT.p, s);
                    }
                    if (f.adB.e) {
                      const s = t.qSel(f.adB.e);
                      s && t.qSel('#sfBot>.button').insertAdjacentElement(f.adB.p, s);
                    }
                    let p = Math.floor(f.tm2),
                      g = t.setInterval(() => {
                        --p, t.sAtd('#sfBot .sfLnk', 'timer', Math.floor(p)), p <= 0 && (t.clearInterval(g), t.sAtd('#sfBot .sfLnk', 'timer', "0"), t.setTimeout(() => {
                          t.rAtd('#sfBot .sfLnk', 'timer'), t.aCls('#sfBot .sfLnk', "a");
                        }, 1e3));
                      }, 1e3);
                  }, 3e3));
                }, 1e3);
                t.qSel('#sfBot .sfLnk').addEventListener('click', s => {
                  let r = s.target;
                  if (t.cCls(r, "a") && t.cCls(r, "ok")) {
                    t.xAR.rSS('_Safelink'), t.open(f.lnk, '_blank', 'noopener');
                    const s = f.dad || t.location.href;
                    t.setTimeout(() => t.location.href = s, 1e3);
                  }
                });
                let u = n.documentElement.scrollTop;
                t.addEventListener('scroll', () => {
                  let m = n.documentElement.scrollTop;
                  u > m ? t.rCls('body', 'onSb') : (t.aCls('body', 'onSb'), u = m);
                  let h = (n.body.scrollTop || n.documentElement.scrollTop) / (n.documentElement.scrollHeight / 100 * f.vsc - n.documentElement.clientHeight) * 100;
                  h > 100 && (h = 100, t.cCls('#sfBot', "ok") || (t.aCls('#sfBot', "ok"), t.aCls('#sfBot .sfLnk', "ok"), t.qSel('#sfBot .pgSf > div').style.width = "")), t.qSel('#sfBot') && (t.cCls('#sfBot', "ok") || (t.qSel('#sfBot .pgSf > div').style.width = h + "%"));
                });
              },
              o = '_Safelink',
              p = t.xAR.gSS(o) ? t.jOp(t.xAR.gSS(o)) : "";
            p && e(p);
          } catch (t) {}
        })(t, t.document), t.geId('aRel') && !t._AR.is.Pvb && (t._f.relatedInPost = () => {
          t.xAR.iOb('#aRel', async n => {
            const m = await (async n => {
              try {
                const s = t.gAtd(n, 'label') ? t.encodeURIComponent(t.gAtd(n, 'label')) : "",
                  d = s ? "-/" + s : "",
                  p = t.gAtd(n, 'mrst') ? t.gAtd(n, 'mrst') : 6,
                  f = t.gAtd(n, 'sby') ? t.gAtd(n, 'sby') : 'published';
                if ('fetch' in t) try {
                  const s = await t.xAR.gFa('/feeds/posts/summary/$1?alt=json&max-results=0&orderby=$2'.replace("$1", d).replace("$2", f)),
                    e = s ? Number(s.feed.openSearch$totalResults.$t) : 1;
                  let n = e > 1 && e;
                  if (n) {
                    let s = n - (p - 1);
                    s = 1 < s ? t.xAR.rdm(s) : 1;
                    const e = await t.xAR.gFa('/feeds/posts/default/$1?alt=json&max-results=$2&orderby=$3&start-index=$4'.replace("$1", d).replace("$2", Number(p) + 1).replace("$3", f).replace("$4", s));
                    n = e && e.feed.entry;
                  }
                  return n;
                } catch (t) {
                  return false;
                }
                return false;
              } catch (t) {
                return false;
              }
            })(n);
            if (m) ((e, n) => {
              let d = "";
              const p = t.gAtd(n, 'mrst') ? t.gAtd(n, 'mrst') : 6,
                f = [];
              e.forEach(s => {
                try {
                  const c = s.title.$t,
                    r = s.link.find(t => 'alternate' === t.rel).href;
                  if (t._AR.blg.xur != r && f.length < p) {
                    f.push(c);
                    let t = s.content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g);
                    t = t ? t[0].match(/(?<=<span.*?class="apName".*?>)(.*?)(?=<\/span>)/g) : "";
                    let l = s.content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g),
                      p = l ? l[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                    l = l ? l[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g) : "", p = p ? p[1] : "";
                    let m = s.content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g),
                      h = m ? m[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                    m = m ? m[0].match(/(?<=<span.*?class="apMod".*?>)(.*?)(?=<\/span>)/g) : "", h = h ? h[1] : "", d += '<li><a aria-label="' + c + '" href="' + r + '"><div class="itmTtl"><span>' + (t || c) + '</span>' + (l ? ' <span class="v"' + (p ? ' data-text="' + p + '"' : "") + ">v" + l + '</span>' : "") + (m ? ' <span class="m"' + (h ? ' data-text="' + h + '"' : "") + ">(" + m + ')</span>' : "") + '</div></a></li>';
                  }
                } catch (t) {}
              }), n.querySelector("ul").innerHTML = d;
              try {
                t._f.laZy(false, true);
              } catch (t) {}
            })(m, n);else {
              const t = n.parentNode;
              'DETAILS' == t.tagName ? t.style.display = 'none' : n.style.display = 'none';
            }
          });
        }, t.Defer(t._f.relatedInPost, 0)), t.geId('rPst') && !t._AR.is.Pvb && (t._f.relatedPost = () => {
          t.xAR.iOb('#rPst', async e => {
            const d = await (async e => {
              try {
                const s = t.gAtd(e, 'label') ? t.encodeURIComponent(t.gAtd(e, 'label')) : "",
                  i = s ? "-/" + s : "",
                  l = t.gAtd(e, 'mrst') || 6,
                  d = t.gAtd(e, 'sby') || 'published';
                if ('fetch' in t) try {
                  const s = await t.xAR.gFa('/feeds/posts/summary/$1?alt=json&max-results=0&orderby=$2'.replace("$1", i).replace("$2", d)),
                    e = s ? t.Number(s.feed.openSearch$totalResults.$t) : 1;
                  let p = e > 1 && e;
                  if (p) {
                    let s = p - (l - 1);
                    s = 1 < s ? t.xAR.rdm(s) : 1;
                    const e = await t.xAR.gFa('/feeds/posts/default/$1?alt=json&max-results=$2&orderby=$3&start-index=$4'.replace("$1", i).replace("$2", t.Number(l) + 1).replace("$3", d).replace("$4", s));
                    p = e && e.feed.entry;
                  }
                  return p;
                } catch (t) {
                  return false;
                }
                return false;
              } catch (t) {
                return false;
              }
            })(e);
            d ? ((e, n) => {
              let f = "";
              const g = t.gAtd(n, 'mrst') || 6,
                m = [],
                h = t.cCls(n, "s1"),
                u = t.gAtd(n, 'thmb') || 's280',
                b = t.gAtd(n, 'athmb') || 's120',
                _ = h ? b : u;
              e.forEach(s => {
                try {
                  const a = s.title.$t,
                    l = s.link.find(t => 'alternate' === t.rel).href;
                  let p = s.content.$t.match(/<img.*? [^>]*src="[^"]*"[^>]*>/g);
                  if (p && (p = p.map(t => t.replace(/.*src="([^"]*)".*/, "$1"))[0], p = p ? 'url(\'' + t.rszI(p, _) + "')" : ""), p || (p = s.media$thumbnail ? 'url(\'' + t.rszI(s.media$thumbnail.url, _) + "')" : 'none'), t._AR.blg.xur != l && m.length < g) {
                    m.push(a);
                    let g = "";
                    h || (g = s.content.$t.includes('altImg') ? s.content.$t.match(/<img.class=.altImg.*?src="(.*?)"[^\>]+>/g) : "", g = g ? g.map(t => t.replace(/.*src="([^"]*)".*/, "$1"))[0] : "", g = g ? 'url(\'' + t.rszI(g, _) + "')" : 'none');
                    const u = h || 'none' == g ? p : g;
                    let b = s.content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g);
                    b = b ? b[0].match(/(?<=<span.*?class="apName".*?>)(.*?)(?=<\/span>)/g) : "";
                    let v = s.content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g),
                      y = v ? v[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                    v = v ? v[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g) : "", y = y ? y[1] : "";
                    let x = s.content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g),
                      A = x ? x[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                    x = x ? x[0].match(/(?<=<span.*?class="apMod".*?>)(.*?)(?=<\/span>)/g) : "", A = A ? A[1] : "", f += '<li><a class="item" aria-label="' + a + '" href="' + l + '"><div class="iThmb pThmb"><div class="thmb"><div class="img lazy" data-style="background-image: ' + u + '"></div></div></div><div class="itmTtl"><span>' + (b || a) + '</span> ' + (v ? '<span class="apVM">v' + v + (x ? ' • ' + x : "") + '</span>' : "") + (y ? '<div class="apAM"><span class="apk" data-text="' + y + '"></span>' + (A ? '<span class="mod" data-text="' + A + '"></span>' : "") + '</div>' : "") + '</div></a></li>';
                  }
                } catch (t) {}
              }), n.querySelector("ul").innerHTML = f;
              try {
                t._f.laZy(false, true);
              } catch (t) {}
            })(d, e) : e.style.display = 'none';
          });
        }, t.Defer(t._f.relatedPost, 0));
      }), t._AR.is.It && (t.domCL(() => {
        t._AR.is.Mob && 'share' in t.navigator && t.sElm('label[for=forShare]', s => {
          t.rAttr(s, 'for'), s.addEventListener('click', () => {
            t.navigator.share({
              title: t.document.title,
              url: t._AR.blg.xur
            });
          });
        }), t.sElm('#cmHolder', t => {
          let c = t.innerHTML;
          c = (c = c.replace(/<i rel="image">(.*?)<\/i>/gi, '<img data-src="$1" src="data:image/webp;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Image Comment" />')).replace(/<i rel="pre">(.*?)<\/i>/gi, '<div class="pre"><pre>$1</pre></div>'), t.innerHTML = c;
        }), t.sElm('#comment-editor', e => {
          const i = t.gAtd(e, 'src'),
            l = t.geId('commentForm'),
            g = t.qSel('.cmFrm');
          t.sElm('.rpTo', n => {
            ((e, n, o, a) => {
              e.addEventListener('click', () => {
                const f = t.gAttr(e, 'data-reply-to');
                t.geId("c" + f).appendChild(n), l.className = 'cmRbox', t.geId('addCm').className = 'cmAd', o.src = a + '&parentID=' + f;
              });
            })(n, l, e, i);
          }), t.sElm('#addCm', t => {
            t.addEventListener('click', () => {
              g.appendChild(l), l.className = 'cmRbox', t.className = 'cmAd hidden', e.src = i;
            });
          });
        }), t.sElm('.cmBd .cmCo a', s => {
          t.sAttr(s, 'target', '_blank'), t.aCls(s, 'extL');
        }), t.addEventListener('blur', () => {
          try {
            const c = t.geId('comment-editor');
            t.document.activeElement == c && t.addEventListener('message', t => {
              if ('https://www.blogger.com' == t.origin && 0 == t.data.indexOf('set-comment-editor-height')) {
                const s = t.data.substring(26).replace("px", "");
                c.height = s;
              }
            });
          } catch (t) {}
        }), t.sElm('#commentForm', () => {
          t._f.cmnParse = n => {
            const p = t.geId('cod-K');
            let f = p.value.replace(/\t/g, '    '),
              g = t.gAtd(n, 'text');
            "" != p.value ? ('pre' == g || 'code' == g ? (f = f.replace(/&/g, '&amp;').replace(/'/g, '&#039;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'), f = 'pre' == g ? f.replace(/^/, '<i rel="pre">') : f.replace(/^/, '<i rel="code">')) : 'image' == g ? f = f.replace(/^/, '<i rel="image">') : 'quote' == g ? f = f.replace(/^/, '<i rel="quote">') : 'tag' == g && (f = f.replace(/^/, '<i rel="tag">')), f = f.replace(/$/, '</i>'), p.value = f, p.focus(), t.rCls('#bcpKomen', 'hidden'), t.qSell('.parCmn .btn.m').forEach(t => {
              t.disabled = true;
            })) : p.focus();
          }, t._f.clrPcmn = () => {
            const l = t.geId('cod-K');
            l.value = "", l.focus(), t.aCls('#npC', 'hidden'), t.aCls('#bcpKomen', 'hidden'), t.qSell('.parCmn .btn.m').forEach(t => {
              t.disabled = false;
            });
          }, t._f.cpyPcmn = () => {
            const i = t.geId('cod-K');
            _f.cpyTC(i.value), i.value = "", t.rCls('#npC', 'hidden'), t.setTimeout(() => {
              _f.clrPcmn();
            }, 1e3);
          };
        }), t.sElm('.lazyYt', s => {
          const i = 'https://img.youtube.com/vi/' + s.dataset.embed + '/sddefault.jpg',
            p = new Image();
          p.setAttribute('class', 'lazy'), p.setAttribute('data-src', i), p.setAttribute('src', 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='), p.setAttribute('alt', 'Youtube video'), p.addEventListener('load', s.appendChild(p)), s.addEventListener('click', () => {
            const d = t.document.createElement('iframe');
            d.setAttribute('frameborder', "0"), d.setAttribute('allowfullscreen', ""), d.setAttribute('src', 'https://www.youtube.com/embed/' + s.dataset.embed + '?rel=0&showinfo=0&autoplay=1'), s.innerHTML = "", s.appendChild(d);
          });
        }), t.sElm('.pS .separator >a, .pS .tr-caption-container td >a, .pS .separator >img, .pS .tr-caption-container td >img, .pS .psImg >img, .pS .btImg >img, .galWrp > img, .lbx > img', t => {
          const o = '<div class="zmImg">' + t.outerHTML + '</div>';
          t.outerHTML = o;
        }), t.sElm('.zmImg', s => {
          const r = s.querySelector('img:not(.n)');
          null != r && (t.sAttr(r, 'onclick', 'return false'), s.onclick = () => {
            s.classList.toggle("s"), s.firstChild.classList.contains("sz") && t.sAttr(s.firstChild, 'src', t.gAttr(s.firstChild, 'src').replace(/\/s[0-9]+(\-c)?/, '/s1200').replace(/\=s[0-9]+(\-c)?/, '=s1200').replace(/\=.*w[0-9].*h[0-9]+(\-c)?/, '=s1200'));
          });
          const i = s.querySelector('img.c:not(.n)');
          null != i && t.gAttr(i, 'alt') && t.sAtd(s, 'text', t.gAttr(i, 'alt'));
        }), t.sElm('#rdTime', e => {
          const r = t => {
              let c = "";
              for (let s = t.childNodes.length, i = 0; i < s; i++) {
                const s = t.childNodes[i];
                8 != s.nodeType && (c += 1 != s.nodeType ? s.nodeValue : r(s));
              }
              return c;
            },
            i = r(t.geId('postBody')).split(" ").length / 200,
            p = Math.round(i);
          e.innerHTML = p + ' min read';
        });
        class m {
          constructor({
            from: s,
            to: e
          }) {
            this.fromElement = s, this.toElement = e, this.headingElements = this.fromElement.querySelectorAll('h1:not(.n),h2:not(.n),h3:not(.n),h4:not(.n),h5:not(.n),h6:not(.n)'), this.tocElement = t.document.createElement('div');
          }
          ['getMostImportantHeadingLevel']() {
            let a = 6;
            for (let c = 0; c < this.headingElements.length; c++) {
              let t = m.getHeadingLevel(this.headingElements[c]);
              a = t < a ? t : a;
            }
            return a;
          }
          static ['generateId'](t) {
            return t.textContent.replace(/\s+/g, "_");
          }
          static ['getHeadingLevel'](t) {
            switch (t.tagName.toLowerCase()) {
              case "h1":
              default:
                return 1;
              case "h2":
                return 2;
              case "h3":
                return 3;
              case "h4":
                return 4;
              case "h5":
                return 5;
              case "h6":
                return 6;
            }
          }
          ['generateToc']() {
            let l = this.getMostImportantHeadingLevel() - 1,
              d = this.tocElement;
            if (0 !== this.headingElements.length) {
              for (let p = 0; p < this.headingElements.length; p++) {
                let f = this.headingElements[p],
                  g = m.getHeadingLevel(f),
                  h = g - l,
                  u = t.document.createElement("a");
                if (f.id || (f.id = m.generateId(f)), u.href = "#" + f.id, u.textContent = f.textContent, h > 0) {
                  for (let e = 0; e < h; e++) {
                    let e = t.document.createElement("ol"),
                      l = t.document.createElement("li");
                    e.appendChild(l), d.appendChild(e), d = l;
                  }
                  d.appendChild(u);
                } else {
                  for (let t = 0; t < -h; t++) d = d.parentNode.parentNode;
                  let e = t.document.createElement("li");
                  e.appendChild(u), d.parentNode.appendChild(e), d = e;
                }
                l = g;
              }
              this.toElement.appendChild(this.tocElement.firstChild);
            } else t._xTime('HeadingElements not found');
          }
        }
        t.sElm('#toContent', s => {
          new m({
            from: t.geId('postBody'),
            to: s
          }).generateToc();
        });
      }), t.Defer(() => {
        t._f.hlJs = s => {
          const i = 'pre.hljs:not([data-hljs])',
            l = 'Highlight-js',
            d = s || t._AR.js + 'js/Highlight.js',
            p = () => {
              t.sElm(i, e => {
                const i = e,
                  l = i.textContent,
                  d = i.parentNode,
                  p = t.gAtd(d, 'text');
                let f = "";
                if (p) try {
                  f = t.hljs.highlight(l, {
                    language: p.toLowerCase()
                  });
                } catch (s) {
                  t.rAtd(d, 'text');
                } else f = t.hljs.highlightAuto(l), t.sAtd(d, 'text', f.language);
                f && (i.innerHTML = f.value), t.sAtd(i, 'hljs', true);
              });
            };
          t.qSel(i) && !t.geId(l) ? t.ldJs({
            url: d,
            id: l,
            sc: () => {
              p();
            }
          }) : t.qSel(i) && t.geId(l) && p();
        }, t._f.hlJs(), t.sElm('pre', s => {
          const d = t.jOp(t.getComputedStyle(t.qSel('body')).getPropertyValue('--msg'))[0];
          if (s.addEventListener('dblclick', () => {
            t._f.cpyTC(s.textContent), t.toastNotif(d);
          }), !t.cCls(s, "n")) {
            let t = "";
            const n = s.innerHTML.split(/[\n\r]/g);
            for (let s = 0; s < n.length; s++) t += '<span></span>';
            s.insertAdjacentHTML('beforebegin', '<div aria-hidden="true" class="preNumb">' + t + '</div>');
          }
        }), t._f.abPlayer = () => {
          const d = () => {
            t.ldJs({
              url: t._AR.js + 'js/abPlyr.js'
            });
          };
          t.geId('AudioBookPlayer') && null == t.geId('Vue-js') ? t.ldJs({
            url: t._AR.js + 'js/Vue.js',
            id: 'Vue-js',
            sc: () => {
              d();
            }
          }) : t.geId('AudioBookPlayer') && t.geId('Vue-js') && d();
        }, t._f.abPlayer();
      })), !t._AR.is.Hm || t._AR.is.Pv || t._AR.is.Pvb || (t._f.psByLabel = () => {
        t.xAR.iOb('.wPsLbl', async n => {
          const r = await (async e => {
            try {
              const s = t.gAtd(e, 'label') ? t.encodeURIComponent(t.gAtd(e, 'label')) : "",
                i = s ? "-/" + s : "",
                l = t.gAtd(e, 'mrst') || 6,
                d = t.gAtd(e, 'sby') || 'published';
              if ('fetch' in t) try {
                const s = await t.xAR.gFa('/feeds/posts/default/$1?alt=json&max-results=$2&orderby=$3'.replace("$1", i).replace("$2", l).replace("$3", d));
                return s && s.feed.entry;
              } catch (t) {
                return false;
              }
              return false;
            } catch (t) {
              return false;
            }
          })(n);
          r ? ((e, n) => {
            let d = "";
            e.forEach(s => {
              try {
                const c = s.title.$t,
                  p = s.link.find(t => 'alternate' === t.rel).href;
                let f = s.content.$t.match(/<img.*? [^>]*src="[^"]*"[^>]*>/g);
                f && (f = f.map(t => t.replace(/.*src="([^"]*)".*/, "$1"))[0], f = f ? 'url(\'' + t.rszI(f, 's120-rw-e30') + "')" : ""), f || (f = s.media$thumbnail ? 'url(\'' + t.rszI(s.media$thumbnail.url, 's120-rw-e30') + "')" : 'none');
                let g = s.content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g);
                g = g ? g[0].match(/(?<=<span.*?class="apName".*?>)(.*?)(?=<\/span>)/g) : "";
                let m = s.content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g),
                  h = m ? m[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                m = m ? m[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g) : "", h = h ? h[1] : "";
                let u = s.content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g),
                  b = u ? u[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                u = u ? u[0].match(/(?<=<span.*?class="apMod".*?>)(.*?)(?=<\/span>)/g) : "", b = b ? b[1] : "", d += '<li><a class="item" aria-label="' + c + '" href="' + p + '"><div class="iThmb pThmb"><div class="thmb"><div class="img lazy" data-style="background-image: ' + f + '"></div></div></div><div class="itmTtl"><span>' + (g || c) + '</span> ' + (m ? '<span class="apVM">v' + m + (u ? ' • ' + u : "") + '</span>' : "") + (h ? '<div class="apAM"><span class="apk" data-text="' + h + '"></span>' + (b ? '<span class="mod" data-text="' + b + '"></span>' : "") + '</div>' : "") + '</div></a></li>';
              } catch (t) {}
            }), n.querySelector("ul").innerHTML = d;
            try {
              t._f.laZy(false, true);
            } catch (t) {}
          })(r, n) : n.style.display = 'none';
        });
      }, t.Defer(t._f.psByLabel, 0)), t._AR.is.Id && t.domCL(() => {
        var i, l;
        t._AR.fs.pgSa.enable && (i = t, l = t.document, i.InfiniteScroll = function (t) {
          function b(t, e) {
            return (e = e || l).querySelectorAll(t);
          }
          function _(t) {
            return undefined !== t;
          }
          function y(t, s) {
            if (_($[t])) for (var e in $[t]) $[t][e](s);
          }
          function x() {
            return I.innerHTML = C.text.loading, S = true, L ? (aCls(M, C.state.loading), y('loading', [C]), void w(L, function (s, n) {
              M.className = D + " " + C.state.load, (j = l.createElement('div')).innerHTML = s;
              var g = b('title', j),
                m = b(C.target.post, j),
                h = b(C.target.anchors + " " + C.target.anchor, j),
                u = b(C.target.post, k);
              if (g = g && g[0] ? g[0].innerHTML : "", m.length && u.length) {
                var _ = u[u.length - 1];
                l.title = g, _.insertAdjacentHTML('afterend', " "), j = l.createElement('div');
                for (var v = 0, x = m.length; x > v; ++v) j.appendChild(m[v]);
                _.insertAdjacentHTML('afterend', j.innerHTML), A(), L = !!h.length && h[0].href, S = false, y('load', [C, s, n]);
              }
            }, function (t, s) {
              aCls(M, C.state.error), S = false, A(1), y('error', [C, t, s]);
            })) : (aCls(M, C.state.loaded), I.innerHTML = C.text.loaded, y('loaded', [C]));
          }
          function A(t) {
            if (I.innerHTML = "", P) {
              j.innerHTML = C.text[n(t ? 1175 : 1246)];
              var r = j.firstChild;
              r.onclick = function () {
                return 2 === C.type && (P = false), x(), false;
              }, I.appendChild(r);
            }
          }
          var C = {
              target: {
                posts: '.posts',
                post: '.post',
                anchors: '.anchors',
                anchor: '.anchor'
              },
              text: {
                load: "%s",
                loading: "%s",
                loaded: "%s",
                error: "%s"
              },
              state: {
                load: (w = 'infinite-scroll-state-') + 'load',
                loading: w + 'loading',
                loaded: w + 'loaded',
                error: w + 'error'
              }
            },
            $ = {
              load: [],
              loading: [],
              loaded: [],
              error: []
            };
          (C = function t(s, e) {
            for (var o in s = s || {}, e) s[o] = 'object' == typeof e[o] ? t(s[o], e[o]) : e[o];
            return s;
          }(C, t || {})).on = function (t, s, e) {
            return _(t) ? _(s) ? void (_(e) ? $[t][e] = s : $[t].push(s)) : $[t] : $;
          }, C.off = function (t, s) {
            _(s) ? delete $[t][s] : $[t] = [];
          };
          var j = null,
            w = function (t, s, e) {
              if (i.XMLHttpRequest) {
                var l = new XMLHttpRequest();
                l.onreadystatechange = function () {
                  if (4 === l.readyState) {
                    if (200 !== l.status) return void (e && 'function' == typeof e && e(l.responseText, l));
                    s && 'function' == typeof s && s(l.responseText, l);
                  }
                }, l.open('GET', t), l.send();
              }
            },
            P = 1 !== C.type,
            S = false,
            k = b(C.target.posts)[0],
            I = b(C.target.anchors)[0],
            L = b(C.target.anchor, I),
            T = l.body,
            M = l.documentElement,
            D = M.className || "",
            B = k.offsetTop + k.offsetHeight,
            R = i.innerHeight,
            G = 0,
            E = null;
          if (L.length) {
            L = L[0].href, k.insertAdjacentHTML('afterbegin', " "), j = l.createElement('div'), A();
            var z = function () {
              B = k.offsetTop + k.offsetHeight, R = i.innerHeight, G = T.scrollTop || M.scrollTop, S || B > G + R || x();
            };
            z(), 0 !== C.type && i.addEventListener('scroll', function () {
              P || (E && i.clearTimeout(E), E = i.setTimeout(z, 200));
            }, false);
          }
          return C;
        }, t._f.infiniteSc = new InfiniteScroll({
          type: Number(t._AR.fs.pgSa.run),
          target: {
            posts: '.blogPts',
            post: '.ntry',
            anchors: '.blogPg',
            anchor: '.olLnk'
          },
          text: {
            load: '<a class=\'jsLd ripple\' aria-label=\'' + t._AR.msg.more + '\' data-text=\'' + t._AR.msg.more + '\' href=\'javascript:;\'/>',
            loading: '<div class=\'jsLd wait nPst\' data-text=\'' + t._AR.msg.loading + '\'><svg viewBox=\'0 0 50 50\' x=\'0px\' y=\'0px\'><path d=\'M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z\'><animateTransform attributeName=\'transform\' attributeType=\'xml\' dur=\'0.6s\' from=\'0 25 25\' repeatCount=\'indefinite\' to=\'360 25 25\' type=\'rotate\'/></path></svg></div>',
            loaded: '<div class=\'jsLd nPst ripple\' data-text=\'' + t._AR.msg.noRst + "'>" + t._AR.msg.noRst + '</div>',
            error: '<a class=\'jsLd error\' aria-label=\'' + t._AR.msg.more + '\' data-text=\'' + t._AR.msg.moreElp + '\' href=\'javascript:;\'/>'
          }
        }));
      }), t.Defer.all('script[type="arjs"]', 0), t.Defer.all('script[type="arjs-x"]', 0, true), t.Defer.all('script[type="arjs-3"]', 3e3), t.Defer.all('script[type="arjs-5"]', 5e3), t.Defer.all('script[type="arjs-7"]', 7e3), t._f.laZy = (s, e, n) => {
        s && t.Defer.dom('img.lazy:not(.loaded)', 100, 'loaded', null, {
          rootMargin: '1px',
          threshold: .1
        }, ['src', 'srcset', 'sizes']), e && t.Defer.dom('div.lazy:not(.loaded)', 100, 'loaded', null, {
          rootMargin: '1px',
          threshold: .1
        }, ['style']), n && t.Defer.dom('iframe.lazy:not(.loaded)', 100, 'loaded', null, {
          rootMargin: '1px',
          threshold: .1
        }, ['src', 'poster']);
      }, t._f.laZy(true, true, true), t.domCL(() => {
        undefined !== t._f.infiniteSc && t._f.infiniteSc.on('load', () => {
          undefined !== t._f.sPsAG && t._f.sPsAG(), undefined !== t._f.cImgAG && t._f.cImgAG(), undefined !== t._f.psBkm && t._f.psBkm(), undefined !== t._f.qEdit && t._f.qEdit(), undefined !== t._f.showCounter && t._f.showCounter(), undefined !== t._f.pushAd && t._f.pushAd(), t._f.laZy(true, true);
        });
      });
    } catch (t) {
      return false;
    }
  })(t);
})(window);
