import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {Camera,CameraOptions} from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [
    WebView,
    Camera,
    { provide: RouteReuseStrategy,useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
