import { Component, ElementRef, OnInit, SecurityContext, ViewChild } from '@angular/core';
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';

//import { LibrosService } from '../../API/libros.service';
import { DataService } from '../../services/data.service';
import { LibroService } from 'src/app/services/libro.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-visor-libro',
  templateUrl: './visor-libro.component.html',
  styleUrls: ['./visor-libro.component.scss'],
})
export class visorLibroComponent implements OnInit {
	
	skeleton: any[] = [100, 85, 100, 85, 100];
	noHayLibrosAsignados: boolean = false;
	botonesEstado = false;
	acordeonEstado = false;
	iframeEstado = true;
	librosTemp: any[] = [];
	librosAll: any[] = [];
	librosLoading: boolean;
	paginaActual: number = 1;
	iframeRef: any;

	urlLibro: any;

	fabBtnOpen: boolean = false;
	fabPageNumberClass: string;
	crearNotasActivated: boolean = false;
	crearNotasDesativado: boolean = false;

	urlLibroLocal: any;
	urlLibrodev: any;
	librosLocal: any[] = [ {
			Nombre: 'ESC_01_science_v2',
			ruta: 'assets/'
		}, {
			Nombre: 'ESC_03_matematicas_v2',
			ruta: 'assets/',
		}, {
			Nombre: 'ESC_06_historia_v2',
			ruta: 'assets/',
		}

	];

	@ViewChild('iframe') iframe: ElementRef;
  
	constructor( 
	  public dataService: DataService,
	  private librosService: LibroService,
	  private domSanitizer: DomSanitizer,
	  private router: Router,
	  private route: ActivatedRoute,
	  private location: Location,
	) {
		
	}

	async ionViewWillEnter() {
		
	  }

	ngOnInit() {
		this.route.queryParams.subscribe((params) => {
					console.log('Datos recibidos:', params);
					this.abrirLibro(params);
				});
		/* Reciviendo datos del libro */

		// const receivedData = this.router.getCurrentNavigation()?.extras.state;

		// console.log('Datos recibidos:', this.router);
		// console.log('Datos recibidos:', receivedData);
		// console.log('Datos recibidos:', receivedData);
		// console.log('Datos recibidos:', receivedData);
		// if (receivedData) {
		// 	this.abrirLibro(receivedData);
		// }
		// else	
		// 	console.log("naada qe ver")
	
		this.dataService.locationsFolder.subscribe((dataReceived: any) => { 
			const { type, args } = dataReceived;
			if(type === 'pagina') {
				this.paginaActual = parseInt(args.pagina);
			}
			if(type === 'crearNotaActivated') {
				this.crearNotasActivated = true;
			}
			if(type === 'crearNotaDesactivated') {
				this.crearNotasDesativado = true;
				this.crearNotasActivated = false;
				setTimeout(() => {this.crearNotasDesativado = false}, 400);
			}
			if(type === 'abrirGuardarPanelProyecto') {
				const projectMap: any = {
					'p_1': 'Proyecto 1',
					'p_2': 'Proyecto 2',
					'p_3': 'Proyecto 3'
				  };
				  
				  if (args.proyecto in projectMap) {
					this.dataService.valueProyecto = projectMap[args.proyecto];
				  }

				this.dataService.nomenclaturaProyecto = args.proyecto;
				this.dataService.paginaActualProyecto = args.pagina
				this.dataService.abrirModalMain();	
				this.dataService.estadoModal = false;
			}
		});

	
		this.dataService.stateIframe$.subscribe((data: boolean) => {
			this.iframeEstado = data;
			this.acordeonEstado = true;
			this.botonesEstado = false;
		 } );
	

		this.dataService.paginaSubejct$.subscribe(value => {
			const message = {
				type: 'callFunction',
				functionName: 'nombreDeTuFuncion',
				arguments: [value]
			};
			this.iframe.nativeElement.contentWindow.postMessage( message , '*');
		});


		/* Secuencias */
		this.dataService.addSecuencia$.subscribe(data => {
			this.iframe.nativeElement.contentWindow.postMessage( data, '*');
		});

		this.dataService.getSecuencias$.subscribe(data => {
			this.iframe.nativeElement.contentWindow.postMessage( data, '*');
		});

		this.dataService.addRequerimiento$.subscribe(data => { 
			this.iframe.nativeElement.contentWindow.postMessage( data, '*');
		});

		this.dataService.deleteSecuencia$.subscribe(data => {
			this.iframe.nativeElement.contentWindow.postMessage( data, '*');
		 });


	  }
	
	 

	  abrirLibro(libro: any){
		const mainUrl: string = 'https://teacher.alfalbs.app/books/';
		let urlTemp = `${mainUrl}${libro.NombreArchivo}/index.html`;

		// let urlTempdev = `${mainUrl}${libro.NombreArchivo.split("_prueba")[0]}/index.html`;
		

		this.urlLibrodev = this.domSanitizer.bypassSecurityTrustResourceUrl(urlTemp);
		
		this.librosLoading = true;
		this.dataService.libroActual = libro;
		// const { Id } = libro;
		
		// accion abrir ifrime con link real libro
		this.dataService.setNombreLibroActual(libro.Nombre);
		this.iframeEstado = true;
		this.acordeonEstado = false;
		this.botonesEstado = true;
		setTimeout(() => {
			this.dataService.currentIframe = this.iframe.nativeElement.contentWindow;
		}, 100);


	  }
	
	  regresar(){
		// this.acordeonEstado = true;
		// this.dataService.stateIframe = false;
		// this.iframeEstado = false;
		// this.botonesEstado = false;
		// this.dataService.estadoModal = false;
		this.dataService.setNombreLibroActual('');
		this.fabPageNumberClass = '';
		this.location.back();
		
	  }

	
	  crearZip(){
		var zip = new JSZip();
		zip.file("ejemplo.js", "Hola Josias y bienvenido a JSZIP\n");
		zip.generateAsync({ type: "blob" }).then(function (content) {
		  FileSaver.saveAs(content, "Example.zip");
		});
	  }

	  abrirIndice() {
		const message = {
			type: 'abrirIndice',
			functionName: 'abrirIndice',
			arguments: []
		}
		this.iframe.nativeElement.contentWindow.postMessage( message , '*');
	  }


	  openFabsMenuLibro() {
		this.fabBtnOpen = !this.fabBtnOpen;
		this.fabPageNumberClass = this.fabBtnOpen ? 'traslateY-fab-pagina' : '';
	  }

	  onBlurFabMenu(event: any) {
		// this.fabBtnOpen = true;
		this.fabPageNumberClass = '';
	  }

	  /**ACCIONES HACIA EL LIBRO DE FAB BUTTONS */

	  openListaFavoritosYNotas() {
		const message = {
			type: 'abrirListaNotasYFavoritos',
			functionName: 'abrirListaNotasYFavoritos',
			arguments: []
		};
		this.iframe.nativeElement.contentWindow.postMessage( message , '*');
	  }

	  openActivarNotaDinamica() {
		const message = {
			type: 'ActivarNotaDinamica',
			functionName: 'ActivarNotaDinamica',
			arguments: []
		}
		this.iframe.nativeElement.contentWindow.postMessage( message , '*');
	  }


	  ngOnDestroy() {
		// this.dataService.addSecuencia$.unsubscribe();
		// this.dataService.paginaSubejct$.unsubscribe();
		// this.dataService.stateIframe$.unsubscribe();
	  }

}