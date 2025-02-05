import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { HighlightService } from '../shared/services/highlight.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  htmlContent: string = `<pre><code class=\"language-typescript\">import { Injectable, Inject } from '@angular/core';\n\nimport { PLATFORM_ID } from '@angular/core';\nimport { isPlatformBrowser } from '@angular/common';\n\nimport 'clipboard';\n\nimport 'prismjs';\nimport 'prismjs/plugins/toolbar/prism-toolbar';\nimport 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';\nimport 'prismjs/components/prism-css';\nimport 'prismjs/components/prism-javascript';\nimport 'prismjs/components/prism-java';\nimport 'prismjs/components/prism-markup';\nimport 'prismjs/components/prism-typescript';\nimport 'prismjs/components/prism-sass';\nimport 'prismjs/components/prism-scss';\n\ndeclare var Prism: any;\n\n@Injectable()\nexport class HighlightService {\n\n  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }\n\n  highlightAll() {\n    if (isPlatformBrowser(this.platformId)) {\n      Prism.highlightAll();\n    }\n  }\n}\n</code></pre>`;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private highlightService: HighlightService
  ){}
  
  ngOnInit(): void {
    if(this.loginService.isLoggedIn()){
      this.router.navigate(['/home']);
    }
  }
  
  ngAfterViewChecked(){
    this.highlightService.highlightAll();
  }
}
