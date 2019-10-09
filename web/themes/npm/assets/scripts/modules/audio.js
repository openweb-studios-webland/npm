import * as WaveSurfer from 'wavesurfer.js'

export default class Audio {
  constructor(el) {
    // DOM elements
    this.container = el
    this.player = this.container.querySelector('[data-audio-player]')
    this.progress = this.container.querySelector('[data-audio-progress]')
    this.playPauseTriggers = this.container.querySelectorAll('[data-audio-play-pause]')
    this.skipBackwardTrigger = this.container.querySelector('[data-audio-skip-backward]')

    // Config
    this.config = {
      audioSource: this.player.dataset.audioSource || null,
      barGap: 1, // Pixels
      barWidth: 2, // Pixels
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
      container: this.player,
      cursorColor: this.config.cursorColor,
      cursorWidth: this.config.cursorWidth,
      isLoaded: false,
      progressColor: this.config.progressColor,
      skipLength: this.config.skipLength,
      waveColor: this.config.waveColor,
    })

    if (this.config.audioSource) {
      this.wavesurfer.load(this.config.audioSource)

      this.wavesurfer.on('ready', () => {
        this.attachEventListeners()
        this.duration = this.toTimestamp(this.wavesurfer.getDuration())
        this.progress.innerHTML = `00:00 / ${this.duration}`
      })
    }
  }

  toTimestamp = seconds => {
    seconds = Math.floor(seconds)
    let minutes = Math.floor(seconds / 60)
    seconds = seconds - minutes * 60
    minutes = this.checkTimeUnits(minutes)
    seconds = this.checkTimeUnits(seconds)

    return `${minutes}:${seconds}`
  }

  checkTimeUnits = unit => {
    return unit < 10 ? `0${unit}` : unit
  }

  audioProcess = seconds => {
    this.progress.innerHTML = `${this.toTimestamp(seconds)} / ${this.duration}`
  }

  playPause = () => {
    this.wavesurfer.playPause()

    if (!this.container.classList.contains('active')) {
      this.container.classList.add('active')
    }

    this.container.classList.toggle('playing')
  }

  skipBackward = () => {
    this.wavesurfer.skipBackward()
  }

  attachEventListeners = () => {
    if (this.playPauseTriggers.length > 0) {
      this.playPauseTriggers.forEach(playPauseTrigger => {
        playPauseTrigger.addEventListener('click', this.playPause)
      })
    }

    this.skipBackwardTrigger.addEventListener('click', this.skipBackward)
    this.wavesurfer.on('audioprocess', this.audioProcess)
  }
}
