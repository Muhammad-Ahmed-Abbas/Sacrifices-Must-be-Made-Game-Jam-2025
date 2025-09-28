gdjs.Level_323Code = {};
gdjs.Level_323Code.localVariables = [];
gdjs.Level_323Code.GDspringObjects1= [];
gdjs.Level_323Code.GDspringObjects2= [];
gdjs.Level_323Code.GDspikesObjects1= [];
gdjs.Level_323Code.GDspikesObjects2= [];
gdjs.Level_323Code.GDTile_959517Objects1= [];
gdjs.Level_323Code.GDTile_959517Objects2= [];
gdjs.Level_323Code.GDTile_95951Objects1= [];
gdjs.Level_323Code.GDTile_95951Objects2= [];
gdjs.Level_323Code.GDTile_95952Objects1= [];
gdjs.Level_323Code.GDTile_95952Objects2= [];
gdjs.Level_323Code.GDNewTextObjects1= [];
gdjs.Level_323Code.GDNewTextObjects2= [];
gdjs.Level_323Code.GDCastles_9595BackgroundObjects1= [];
gdjs.Level_323Code.GDCastles_9595BackgroundObjects2= [];
gdjs.Level_323Code.GDKnightObjects1= [];
gdjs.Level_323Code.GDKnightObjects2= [];
gdjs.Level_323Code.GDPortalObjects1= [];
gdjs.Level_323Code.GDPortalObjects2= [];
gdjs.Level_323Code.GDPlatform_95953Objects1= [];
gdjs.Level_323Code.GDPlatform_95953Objects2= [];
gdjs.Level_323Code.GDPlatform_95952Objects1= [];
gdjs.Level_323Code.GDPlatform_95952Objects2= [];
gdjs.Level_323Code.GDPlatform_95951Objects1= [];
gdjs.Level_323Code.GDPlatform_95951Objects2= [];
gdjs.Level_323Code.GDCorner_9595platformObjects1= [];
gdjs.Level_323Code.GDCorner_9595platformObjects2= [];
gdjs.Level_323Code.GDcoin_9595goldObjects1= [];
gdjs.Level_323Code.GDcoin_9595goldObjects2= [];
gdjs.Level_323Code.GDTornadoObjects1= [];
gdjs.Level_323Code.GDTornadoObjects2= [];


gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.Level_323Code.GDKnightObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDcoin_95959595goldObjects1Objects = Hashtable.newFrom({"coin_gold": gdjs.Level_323Code.GDcoin_9595goldObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.Level_323Code.GDKnightObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDspringObjects1Objects = Hashtable.newFrom({"spring": gdjs.Level_323Code.GDspringObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.Level_323Code.GDKnightObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDspikesObjects1Objects = Hashtable.newFrom({"spikes": gdjs.Level_323Code.GDspikesObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.Level_323Code.GDKnightObjects1});
gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortalObjects1Objects = Hashtable.newFrom({"Portal": gdjs.Level_323Code.GDPortalObjects1});
gdjs.Level_323Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_323Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("coin_gold"), gdjs.Level_323Code.GDcoin_9595goldObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDKnightObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDcoin_95959595goldObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDcoin_9595goldObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDcoin_9595goldObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDcoin_9595goldObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_323Code.GDKnightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDKnightObjects1[i].getY() > 900 ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDKnightObjects1[k] = gdjs.Level_323Code.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDKnightObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDKnightObjects1[i].getBehavior("Health").SetHealth(0, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_323Code.GDKnightObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDKnightObjects1[i].activateBehavior("AdvancedJump", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_323Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("spring"), gdjs.Level_323Code.GDspringObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDKnightObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDspringObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDKnightObjects1 */
/* Reuse gdjs.Level_323Code.GDspringObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDspringObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDspringObjects1[i].getBehavior("Animation").setAnimationName("out");
}
}
{for(var i = 0, len = gdjs.Level_323Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDKnightObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(9000);
}
}
{for(var i = 0, len = gdjs.Level_323Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDKnightObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_323Code.GDKnightObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDKnightObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_323Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("spikes"), gdjs.Level_323Code.GDspikesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDKnightObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDspikesObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_323Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDKnightObjects1[i].getBehavior("Health").SetHealth(0, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_323Code.GDKnightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_323Code.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.Level_323Code.GDKnightObjects1[i].getBehavior("Health").Health(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Level_323Code.GDKnightObjects1[k] = gdjs.Level_323Code.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.Level_323Code.GDKnightObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.Level_323Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Portal"), gdjs.Level_323Code.GDPortalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDKnightObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_9546Level_9595323Code_9546GDPortalObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}
}

}


};

gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_323Code.GDspringObjects1.length = 0;
gdjs.Level_323Code.GDspringObjects2.length = 0;
gdjs.Level_323Code.GDspikesObjects1.length = 0;
gdjs.Level_323Code.GDspikesObjects2.length = 0;
gdjs.Level_323Code.GDTile_959517Objects1.length = 0;
gdjs.Level_323Code.GDTile_959517Objects2.length = 0;
gdjs.Level_323Code.GDTile_95951Objects1.length = 0;
gdjs.Level_323Code.GDTile_95951Objects2.length = 0;
gdjs.Level_323Code.GDTile_95952Objects1.length = 0;
gdjs.Level_323Code.GDTile_95952Objects2.length = 0;
gdjs.Level_323Code.GDNewTextObjects1.length = 0;
gdjs.Level_323Code.GDNewTextObjects2.length = 0;
gdjs.Level_323Code.GDCastles_9595BackgroundObjects1.length = 0;
gdjs.Level_323Code.GDCastles_9595BackgroundObjects2.length = 0;
gdjs.Level_323Code.GDKnightObjects1.length = 0;
gdjs.Level_323Code.GDKnightObjects2.length = 0;
gdjs.Level_323Code.GDPortalObjects1.length = 0;
gdjs.Level_323Code.GDPortalObjects2.length = 0;
gdjs.Level_323Code.GDPlatform_95953Objects1.length = 0;
gdjs.Level_323Code.GDPlatform_95953Objects2.length = 0;
gdjs.Level_323Code.GDPlatform_95952Objects1.length = 0;
gdjs.Level_323Code.GDPlatform_95952Objects2.length = 0;
gdjs.Level_323Code.GDPlatform_95951Objects1.length = 0;
gdjs.Level_323Code.GDPlatform_95951Objects2.length = 0;
gdjs.Level_323Code.GDCorner_9595platformObjects1.length = 0;
gdjs.Level_323Code.GDCorner_9595platformObjects2.length = 0;
gdjs.Level_323Code.GDcoin_9595goldObjects1.length = 0;
gdjs.Level_323Code.GDcoin_9595goldObjects2.length = 0;
gdjs.Level_323Code.GDTornadoObjects1.length = 0;
gdjs.Level_323Code.GDTornadoObjects2.length = 0;

gdjs.Level_323Code.eventsList0(runtimeScene);
gdjs.Level_323Code.GDspringObjects1.length = 0;
gdjs.Level_323Code.GDspringObjects2.length = 0;
gdjs.Level_323Code.GDspikesObjects1.length = 0;
gdjs.Level_323Code.GDspikesObjects2.length = 0;
gdjs.Level_323Code.GDTile_959517Objects1.length = 0;
gdjs.Level_323Code.GDTile_959517Objects2.length = 0;
gdjs.Level_323Code.GDTile_95951Objects1.length = 0;
gdjs.Level_323Code.GDTile_95951Objects2.length = 0;
gdjs.Level_323Code.GDTile_95952Objects1.length = 0;
gdjs.Level_323Code.GDTile_95952Objects2.length = 0;
gdjs.Level_323Code.GDNewTextObjects1.length = 0;
gdjs.Level_323Code.GDNewTextObjects2.length = 0;
gdjs.Level_323Code.GDCastles_9595BackgroundObjects1.length = 0;
gdjs.Level_323Code.GDCastles_9595BackgroundObjects2.length = 0;
gdjs.Level_323Code.GDKnightObjects1.length = 0;
gdjs.Level_323Code.GDKnightObjects2.length = 0;
gdjs.Level_323Code.GDPortalObjects1.length = 0;
gdjs.Level_323Code.GDPortalObjects2.length = 0;
gdjs.Level_323Code.GDPlatform_95953Objects1.length = 0;
gdjs.Level_323Code.GDPlatform_95953Objects2.length = 0;
gdjs.Level_323Code.GDPlatform_95952Objects1.length = 0;
gdjs.Level_323Code.GDPlatform_95952Objects2.length = 0;
gdjs.Level_323Code.GDPlatform_95951Objects1.length = 0;
gdjs.Level_323Code.GDPlatform_95951Objects2.length = 0;
gdjs.Level_323Code.GDCorner_9595platformObjects1.length = 0;
gdjs.Level_323Code.GDCorner_9595platformObjects2.length = 0;
gdjs.Level_323Code.GDcoin_9595goldObjects1.length = 0;
gdjs.Level_323Code.GDcoin_9595goldObjects2.length = 0;
gdjs.Level_323Code.GDTornadoObjects1.length = 0;
gdjs.Level_323Code.GDTornadoObjects2.length = 0;


return;

}

gdjs['Level_323Code'] = gdjs.Level_323Code;
