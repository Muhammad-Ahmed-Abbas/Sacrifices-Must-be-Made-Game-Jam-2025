gdjs.Level_322Code = {};
gdjs.Level_322Code.localVariables = [];
gdjs.Level_322Code.GDBackground_9595Colored_9595LandObjects1= [];
gdjs.Level_322Code.GDBackground_9595Colored_9595LandObjects2= [];
gdjs.Level_322Code.GDPurple_9595small_9595plantObjects1= [];
gdjs.Level_322Code.GDPurple_9595small_9595plantObjects2= [];
gdjs.Level_322Code.GDSunObjects1= [];
gdjs.Level_322Code.GDSunObjects2= [];
gdjs.Level_322Code.GDcloud_95954Objects1= [];
gdjs.Level_322Code.GDcloud_95954Objects2= [];
gdjs.Level_322Code.GDcloud_95956Objects1= [];
gdjs.Level_322Code.GDcloud_95956Objects2= [];
gdjs.Level_322Code.GDSmall_9595Green_9595PlatformObjects1= [];
gdjs.Level_322Code.GDSmall_9595Green_9595PlatformObjects2= [];
gdjs.Level_322Code.GDIsometric_9595Platformer_9595StoneObjects1= [];
gdjs.Level_322Code.GDIsometric_9595Platformer_9595StoneObjects2= [];
gdjs.Level_322Code.GDblock_9595planksObjects1= [];
gdjs.Level_322Code.GDblock_9595planksObjects2= [];
gdjs.Level_322Code.GDbridgeObjects1= [];
gdjs.Level_322Code.GDbridgeObjects2= [];
gdjs.Level_322Code.GDbricksObjects1= [];
gdjs.Level_322Code.GDbricksObjects2= [];
gdjs.Level_322Code.GDbombObjects1= [];
gdjs.Level_322Code.GDbombObjects2= [];
gdjs.Level_322Code.GDNewTextObjects1= [];
gdjs.Level_322Code.GDNewTextObjects2= [];
gdjs.Level_322Code.GDKnightObjects1= [];
gdjs.Level_322Code.GDKnightObjects2= [];
gdjs.Level_322Code.GDPortalObjects1= [];
gdjs.Level_322Code.GDPortalObjects2= [];
gdjs.Level_322Code.GDPlatform_95953Objects1= [];
gdjs.Level_322Code.GDPlatform_95953Objects2= [];
gdjs.Level_322Code.GDPlatform_95952Objects1= [];
gdjs.Level_322Code.GDPlatform_95952Objects2= [];
gdjs.Level_322Code.GDPlatform_95951Objects1= [];
gdjs.Level_322Code.GDPlatform_95951Objects2= [];
gdjs.Level_322Code.GDCorner_9595platformObjects1= [];
gdjs.Level_322Code.GDCorner_9595platformObjects2= [];
gdjs.Level_322Code.GDcoin_9595goldObjects1= [];
gdjs.Level_322Code.GDcoin_9595goldObjects2= [];
gdjs.Level_322Code.GDTornadoObjects1= [];
gdjs.Level_322Code.GDTornadoObjects2= [];


gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.Level_322Code.GDKnightObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDTornadoObjects1Objects = Hashtable.newFrom({"Tornado": gdjs.Level_322Code.GDTornadoObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.Level_322Code.GDKnightObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDcoin_95959595goldObjects1Objects = Hashtable.newFrom({"coin_gold": gdjs.Level_322Code.GDcoin_9595goldObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.Level_322Code.GDKnightObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDbombObjects1Objects = Hashtable.newFrom({"bomb": gdjs.Level_322Code.GDbombObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.Level_322Code.GDKnightObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDbridgeObjects1Objects = Hashtable.newFrom({"bridge": gdjs.Level_322Code.GDbridgeObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.Level_322Code.GDKnightObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPortalObjects1Objects = Hashtable.newFrom({"Portal": gdjs.Level_322Code.GDPortalObjects1});
gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_322Code.GDKnightObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDKnightObjects1[i].activateBehavior("HorizontalDash", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_322Code.GDKnightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDKnightObjects1[i].getBehavior("Health").Health(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDKnightObjects1[k] = gdjs.Level_322Code.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDKnightObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_322Code.GDKnightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDKnightObjects1[i].getY() > 900 ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDKnightObjects1[k] = gdjs.Level_322Code.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDKnightObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDKnightObjects1[i].getBehavior("Health").SetHealth(0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_322Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tornado"), gdjs.Level_322Code.GDTornadoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDTornadoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDKnightObjects1[i].getBehavior("Health").SetHealth(0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_322Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("coin_gold"), gdjs.Level_322Code.GDcoin_9595goldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDcoin_95959595goldObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDcoin_9595goldObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDcoin_9595goldObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDcoin_9595goldObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_322Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("bomb"), gdjs.Level_322Code.GDbombObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDbombObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDKnightObjects1 */
/* Reuse gdjs.Level_322Code.GDbombObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDbombObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDbombObjects1[i].getBehavior("Animation").setAnimationName("active");
}
}
{for(var i = 0, len = gdjs.Level_322Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDKnightObjects1[i].getBehavior("Health").SetHealth(0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_322Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("bridge"), gdjs.Level_322Code.GDbridgeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDbridgeObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDbridgeObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDbridgeObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDbridgeObjects1[i].resetTimer("Fading");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("bridge"), gdjs.Level_322Code.GDbridgeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDbridgeObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDbridgeObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Fading") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDbridgeObjects1[k] = gdjs.Level_322Code.GDbridgeObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDbridgeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDbridgeObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDbridgeObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDbridgeObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_322Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal"), gdjs.Level_322Code.GDPortalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDKnightObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDPortalObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDBackground_9595Colored_9595LandObjects1.length = 0;
gdjs.Level_322Code.GDBackground_9595Colored_9595LandObjects2.length = 0;
gdjs.Level_322Code.GDPurple_9595small_9595plantObjects1.length = 0;
gdjs.Level_322Code.GDPurple_9595small_9595plantObjects2.length = 0;
gdjs.Level_322Code.GDSunObjects1.length = 0;
gdjs.Level_322Code.GDSunObjects2.length = 0;
gdjs.Level_322Code.GDcloud_95954Objects1.length = 0;
gdjs.Level_322Code.GDcloud_95954Objects2.length = 0;
gdjs.Level_322Code.GDcloud_95956Objects1.length = 0;
gdjs.Level_322Code.GDcloud_95956Objects2.length = 0;
gdjs.Level_322Code.GDSmall_9595Green_9595PlatformObjects1.length = 0;
gdjs.Level_322Code.GDSmall_9595Green_9595PlatformObjects2.length = 0;
gdjs.Level_322Code.GDIsometric_9595Platformer_9595StoneObjects1.length = 0;
gdjs.Level_322Code.GDIsometric_9595Platformer_9595StoneObjects2.length = 0;
gdjs.Level_322Code.GDblock_9595planksObjects1.length = 0;
gdjs.Level_322Code.GDblock_9595planksObjects2.length = 0;
gdjs.Level_322Code.GDbridgeObjects1.length = 0;
gdjs.Level_322Code.GDbridgeObjects2.length = 0;
gdjs.Level_322Code.GDbricksObjects1.length = 0;
gdjs.Level_322Code.GDbricksObjects2.length = 0;
gdjs.Level_322Code.GDbombObjects1.length = 0;
gdjs.Level_322Code.GDbombObjects2.length = 0;
gdjs.Level_322Code.GDNewTextObjects1.length = 0;
gdjs.Level_322Code.GDNewTextObjects2.length = 0;
gdjs.Level_322Code.GDKnightObjects1.length = 0;
gdjs.Level_322Code.GDKnightObjects2.length = 0;
gdjs.Level_322Code.GDPortalObjects1.length = 0;
gdjs.Level_322Code.GDPortalObjects2.length = 0;
gdjs.Level_322Code.GDPlatform_95953Objects1.length = 0;
gdjs.Level_322Code.GDPlatform_95953Objects2.length = 0;
gdjs.Level_322Code.GDPlatform_95952Objects1.length = 0;
gdjs.Level_322Code.GDPlatform_95952Objects2.length = 0;
gdjs.Level_322Code.GDPlatform_95951Objects1.length = 0;
gdjs.Level_322Code.GDPlatform_95951Objects2.length = 0;
gdjs.Level_322Code.GDCorner_9595platformObjects1.length = 0;
gdjs.Level_322Code.GDCorner_9595platformObjects2.length = 0;
gdjs.Level_322Code.GDcoin_9595goldObjects1.length = 0;
gdjs.Level_322Code.GDcoin_9595goldObjects2.length = 0;
gdjs.Level_322Code.GDTornadoObjects1.length = 0;
gdjs.Level_322Code.GDTornadoObjects2.length = 0;

gdjs.Level_322Code.eventsList0(runtimeScene);
gdjs.Level_322Code.GDBackground_9595Colored_9595LandObjects1.length = 0;
gdjs.Level_322Code.GDBackground_9595Colored_9595LandObjects2.length = 0;
gdjs.Level_322Code.GDPurple_9595small_9595plantObjects1.length = 0;
gdjs.Level_322Code.GDPurple_9595small_9595plantObjects2.length = 0;
gdjs.Level_322Code.GDSunObjects1.length = 0;
gdjs.Level_322Code.GDSunObjects2.length = 0;
gdjs.Level_322Code.GDcloud_95954Objects1.length = 0;
gdjs.Level_322Code.GDcloud_95954Objects2.length = 0;
gdjs.Level_322Code.GDcloud_95956Objects1.length = 0;
gdjs.Level_322Code.GDcloud_95956Objects2.length = 0;
gdjs.Level_322Code.GDSmall_9595Green_9595PlatformObjects1.length = 0;
gdjs.Level_322Code.GDSmall_9595Green_9595PlatformObjects2.length = 0;
gdjs.Level_322Code.GDIsometric_9595Platformer_9595StoneObjects1.length = 0;
gdjs.Level_322Code.GDIsometric_9595Platformer_9595StoneObjects2.length = 0;
gdjs.Level_322Code.GDblock_9595planksObjects1.length = 0;
gdjs.Level_322Code.GDblock_9595planksObjects2.length = 0;
gdjs.Level_322Code.GDbridgeObjects1.length = 0;
gdjs.Level_322Code.GDbridgeObjects2.length = 0;
gdjs.Level_322Code.GDbricksObjects1.length = 0;
gdjs.Level_322Code.GDbricksObjects2.length = 0;
gdjs.Level_322Code.GDbombObjects1.length = 0;
gdjs.Level_322Code.GDbombObjects2.length = 0;
gdjs.Level_322Code.GDNewTextObjects1.length = 0;
gdjs.Level_322Code.GDNewTextObjects2.length = 0;
gdjs.Level_322Code.GDKnightObjects1.length = 0;
gdjs.Level_322Code.GDKnightObjects2.length = 0;
gdjs.Level_322Code.GDPortalObjects1.length = 0;
gdjs.Level_322Code.GDPortalObjects2.length = 0;
gdjs.Level_322Code.GDPlatform_95953Objects1.length = 0;
gdjs.Level_322Code.GDPlatform_95953Objects2.length = 0;
gdjs.Level_322Code.GDPlatform_95952Objects1.length = 0;
gdjs.Level_322Code.GDPlatform_95952Objects2.length = 0;
gdjs.Level_322Code.GDPlatform_95951Objects1.length = 0;
gdjs.Level_322Code.GDPlatform_95951Objects2.length = 0;
gdjs.Level_322Code.GDCorner_9595platformObjects1.length = 0;
gdjs.Level_322Code.GDCorner_9595platformObjects2.length = 0;
gdjs.Level_322Code.GDcoin_9595goldObjects1.length = 0;
gdjs.Level_322Code.GDcoin_9595goldObjects2.length = 0;
gdjs.Level_322Code.GDTornadoObjects1.length = 0;
gdjs.Level_322Code.GDTornadoObjects2.length = 0;


return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
