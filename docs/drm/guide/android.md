---
title: Tích hợp S-Drm trên android
sidebar_label: Tích hợp Android SDK
---

## Prerequire: Android 16+
## Integrate with Application:
### Import SDK into project:
<!-- ![Android Import SDK!](/img/drm/intergrate_android_import.png "Android Import SDK") -->

	Sample code:
	
```java
	try 
	{
	       System.loadLibrary("sigma");
	 }
	catch(UnsatisfiedLinkError e)
	{
	       e.printStackTrace();
	}
```
**In file build.gradle of main module:** 
	
```java
	dependencies {
...
    compile project(':library-core')
    compile project(':library-dash')
    compile project(':library-hls')
    compile project(':library-ui')
    compile project(':library-smoothstreaming')
...
 }

```
	
**Before using player, integrate account’s information:**

```java
	SigmaHelper.instance().setClientId("<Client Id>");
	SigmaHelper.instance().setAdapter(new SigmaAdapter() {
	      @Override
	       public String authenToken() {
	             return <Auth Token>;
	       }
	});
```
	
**Use SigmaPlayer the same ExoPlayer.**