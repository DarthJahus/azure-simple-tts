# Azure Simple TTS

Minimal web interface to use Microsoft Azure Text-to-Speech directly from the browser.

## Features

- Text-to-speech via Azure Speech
- Region and voice selection
- Instant playback
- Local history with cached audio (IndexedDB)
- Settings saved in localStorage
- Replay from cache without new API call

## Requirements

- Azure Speech API key
- Valid Azure region

## Usage

1. Open `index.html` in a modern browser.
2. Enter your Azure Speech API key.
3. Select region and voice.
4. Type your text.

## Local Storage

- API key, region, voice: `localStorage`
- History + audio cache: `IndexedDB`
- No data is sent anywhere except to the Azure Speech API

## External Dependency

- Microsoft Cognitive Services Speech SDK (via jsDelivr CDN)

## Acknowledgement

Written using Claude Sonnet 4.5.

## License

Licensed under the Apache License 2.0.

See the [LICENSE](LICENSE) file for details.
