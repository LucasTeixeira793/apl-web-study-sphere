import { Component, OnInit, ElementRef, Renderer2, AfterViewChecked, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { HighlightService } from '../shared/services/highlight.service';
import { FormBuilder } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {
  @ViewChild('textArea') textArea!: ElementRef;
  @ViewChild('codeContent') codeContent!: ElementRef;
  @ViewChild('pre') pre!: ElementRef;

  sub = new Subscription();
  highlighted: boolean = false;
  editable = true;
  
  form = this.fb.group({
    content: '',
    codeType: 'markup'
  });

  constructor(
    private router: Router,
    private loginService: LoginService,
    private highlightService: HighlightService,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {}

  get contentControl() {
    return this.form.get('content');
  }

  updateHighlight() {
    this.highlightService.highlightAll();
  }

  ngOnInit(): void {
    this.listenForm();

    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  ngAfterViewChecked(): void {
    if (this.highlighted) {
      this.updateHighlight();
      this.highlighted = false;
    }
  }

  ngAfterViewInit(): void {
    this.syncScroll();
    this.updateHighlight();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private listenForm() {
    this.sub.add(
      this.form.valueChanges.subscribe((val) => {
        const modifiedContent = this.highlightService.convertHtmlToString(val.content ?? '');
        this.renderer.setProperty(this.codeContent.nativeElement, 'innerHTML', modifiedContent);
        this.highlighted = true;
      })
    );
  }

  private syncScroll() {
    if (!this.textArea || !this.pre) {
      console.error('Elementos não encontrados!');
      return;
    }

    const localSub = fromEvent(this.textArea.nativeElement, 'scroll').subscribe(() => {
      const toTop = this.textArea.nativeElement.scrollTop;
      const toLeft = this.textArea.nativeElement.scrollLeft;

      this.renderer.setProperty(this.pre.nativeElement, 'scrollTop', toTop);
      this.renderer.setProperty(this.pre.nativeElement, 'scrollLeft', toLeft + 0.2);
    });

    this.sub.add(localSub);
  }
}
