import { gettext } from 'i18n'

Page({
  build() {
    console.log(gettext('example'))
    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 96,
      y: 120,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'HELLO ZEPPOS'
    })

    text.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      text.setProperty(hmUI.prop.MORE, {
        y: 100
      })
    })

    const text2 = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 96,
      y: 200,
      w: 288,
      h: 46,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.CENTER_V,
      text_style: hmUI.text_style.NONE,
      text: 'IO SONO UN TESTO ANIMATO CLICCAMI'
    })

    text2.addEventListener(hmUI.event.CLICK_DOWN, (info) => {
      text2.setProperty(hmUI.prop.MORE, {
        y: 300
      })
    })
  }
})
