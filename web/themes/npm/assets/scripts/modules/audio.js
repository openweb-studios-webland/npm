const WaveSurfer = require('wavesurfer.js/dist/wavesurfer')
// @TODO Update WaveSurfer once import issue is resoloved 3.1.1+
// import WaveSurfer from 'wavesurfer.js'
import activeMedia from '../utilities/active-media'

export default class Audio {
  constructor(el) {
    this.el = el
    this.player = this.el.querySelector('[data-audio-player]')
    this.progress = this.el.querySelector('[data-audio-progress]')
    this.playPauseTriggers = this.el.querySelectorAll('[data-audio-play-pause]')
    this.skipBackwardTrigger = this.el.querySelector('[data-audio-skip-backward]')

    this.config = {
      audioSource: this.player.dataset.audioSource || null,
      barGap: 1, // Pixels
      barWidth: 2, // Pixels
      barHeight: 0.75, // Relational (default is 1)
      cursorColor: '#161616',
      cursorWidth: 2, // Pixels
      progressColor: '#dadada',
      skipLength: 10, // Seconds
      waveColor: '#35beff',
    }

    this.init()
  }

  init = () => {
    // Create Wavesurfer object
    this.wavesurfer = WaveSurfer.create({
      barGap: this.config.barGap,
      barWidth: this.config.barWidth,
      barHeight: this.config.barHeight,
      container: this.player,
      cursorColor: this.config.cursorColor,
      cursorWidth: this.config.cursorWidth,
      progressColor: this.config.progressColor,
      skipLength: this.config.skipLength,
      waveColor: this.config.waveColor,
    })

    if (this.config.audioSource) {
      this.wavesurfer.load(this.config.audioSource)

      this.wavesurfer.on('ready', () => {
        this.duration = this.formatTimestamp(this.wavesurfer.getDuration())
        this.progress.innerHTML = `00:00 / ${this.duration}`

        this.attachEventListeners()
      })
    }
  }

  formatTimestamp = seconds => {
    seconds = Math.floor(seconds)
    let minutes = Math.floor(seconds / 60)
    seconds = seconds - minutes * 60
    minutes = this.formatTimeUnits(minutes)
    seconds = this.formatTimeUnits(seconds)

    return `${minutes}:${seconds}`
  }

  formatTimeUnits = unit => {
    return unit < 10 ? `0${unit}` : unit
  }

  attachEventListeners = () => {
    if (this.playPauseTriggers.length > 0) {
      this.playPauseTriggers.forEach(playPauseTrigger => {
        playPauseTrigger.addEventListener('click', this.playPause)
      })
    }

    this.skipBackwardTrigger.addEventListener('click', this.skipBackward)
    this.wavesurfer.on('audioprocess', this.audioProgress)
  }

  audioProgress = seconds => {
    this.progress.innerHTML = `${this.formatTimestamp(seconds)} / ${this.duration}`
  }

  playPause = e => {
    if (activeMedia.check() || this.el.classList.contains('active')) {
      this.wavesurfer.playPause()
      this.el.classList.toggle('playing')

      if (!this.el.classList.contains('active')) {
        this.el.classList.add('active')

        this.pushToDataLayer()
      }

      activeMedia.toggle()
    }

    e.preventDefault()
  }

  skipBackward = e => {
    this.wavesurfer.skipBackward()

    e.preventDefault()
  }

  pushToDataLayer = () => {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: 'dataLayer push event',
      event_category: 'Audio',
      event_action: this.player.dataset.audioTitle || 'Audio Title',
      event_label: 'Play',
    })
  }
}
