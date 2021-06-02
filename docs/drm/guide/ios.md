---
title: Tích hợp S-Drm trên Ios
sidebar_label: Tích hợp Ios SDK
---

## Prerequire IOS 7.0+
## Integrate with Application

**Import SDK into project:** 

	<!-- ![iOS Import SDK!](/img/integrate_ios_import.png "iOS Import SDK") -->
	
**Before initialization player, config acout’s information:**
	
```
	[[SigmaDRM getInstance] setClientId:clientId];
	[[SigmaDRM getInstance] setAuthToken:authToken];
```

**Integrate with AVPlayer**

```
	AVPlayer *_player;
	AVPlayerItem *_playerItem;
	
	_playerItem = [AVPlayerItem playerItemWithAsset:[[SigmaDRM getInstance] assetWithUrl: uri]];	
	_player = [AVPlayer playerWithPlayerItem:_playerItem];
```