@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent extends SearchAndFilterTable {
  @Input() id: number = null;

  @ViewChild('fileInput') fileInput: ElementRef;

  public skeleton = sharedTableSkeleton;

  private predefinedSearch: string = null;
  private columnsBasedOn: string[];

  constructor(
    private itemService: ItemControllerService,
    private routingService: RoutingService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    super(injector);
    this.getRouteParams();
    this.predefinedSearch = this.router.getCurrentNavigation()?.extras.state?.predefinedEmployee;
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (this.predefinedSearch) {
      this.queryParamsForm.get('search').setValue(this.predefinedSearch);
    }
  }

  public redirectToTimeOffsHistory(): void {
    this.routingService.redirectTo(this.routingService.navigationRoutes.employeeTimeOffsHistory);
  }

  public getList(requestBody: any): Observable<Page<IListItem>> {
    return this.itemService.getAllEmployeeVacancies(requestBody);
  }

  public getDisplayedColumns(): string[] {
    return this.columnsBasedOn;
  }

  public getTabName(): string {
    return TabNames.tabName;
  }

  public concatWithComma(department: Name[]): string {
    return department.map((dep) => dep.name).join(', ');
  }

  private subscribeToFileChange(): void {
    fromEvent(this.fileInput.nativeElement, 'change')
      .pipe(
        pluck('target'),
        pluck('files'),
        pluck('0'),
        map((file: File) => this.getFileFormData(file)),
        switchMap(({ formData, validationResponse }) => {
          const type = this.composeDialogPayload(validationResponse);

          return this.openResultDialog({ type, validationResponse }).pipe(
            filter((value) => !!value),
            map(({ confirm }) => ({
              formData,
              validationResponse,
              type,
              confirm,
            })),
          );
        }),
        switchMap(({ formData, validationResponse, type, confirm }) =>
          this.handleDialogRespons(formData, validationResponse, type, confirm),
        ),
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe();
  }

  private composeDialogPayload(validateResponse: ValidateResponse): ValidationResult {
    if (validateResponse?.rowFailures?.length) {
      return ValidationResult.failure;
    }

    if (validateResponse?.areDifferentPeriodsPresent) {
      return ValidationResult.differentTypes;
    }

    if (validateResponse?.isAnyAlreadPresentRow) {
      return ValidationResult.alreadyPresent;
    }

    if (validateResponse?.duplicatedDataFrom?.length) {
      return ValidationResult.duplication;
    }

    return ValidationResult.success;
  }
}
