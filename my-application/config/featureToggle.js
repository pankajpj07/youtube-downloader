const isProduction = process.env.NODE_ENV === 'production'

const prodFeatureFlags = {
  isEnableMP3: true,
  isEnableMP4: false,
}

const devFeatureFlags = {
  isEnableMP3: true,
  isEnableMP4: true,
}

module.exports = isProduction ? prodFeatureFlags : devFeatureFlags
