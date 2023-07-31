import { Repository } from 'typeorm';
import { Payment } from '../../entities/payment.entity';
import { ConfigService } from '@nestjs/config';
import { TokenEntity } from '../../entities/tokendav.entity';
import { TokenRequestDto } from '../../dto/token-request.dto';
import { BuyEntity } from 'src/payments/entities/buydav.entity';
import { BuyDaviplataDto } from 'src/payments/dto/buy-daviplata.dto';
import { OtpEntity } from 'src/payments/entities/optdav.entity';
import { OtpDaviplataDto } from 'src/payments/dto/otp-daviplata.dto';
import { ConfirmDaviplataDto } from 'src/payments/dto/confirm-daviplata.dto';
import { ConfirmBuyEntity } from 'src/payments/entities/confirmardav.entity';
export declare class DaviplataService {
    private readonly paymentRepository;
    private configService;
    private readonly certPath;
    private readonly keyPath;
    private readonly agent;
    private readonly apiUrl;
    private readonly apiUrlCompra;
    private readonly apiUrlOpt;
    private readonly apiUrlConfirm;
    private readonly requestHeaders;
    private otp;
    private idSessionToken;
    private accessToken;
    constructor(paymentRepository: Repository<Payment>, configService: ConfigService);
    getTokenV2(tokenRequestDto: TokenRequestDto): Promise<TokenEntity>;
    realizarCompraV1(compraData: BuyDaviplataDto): Promise<BuyEntity>;
    readOtp(readOtpData: OtpDaviplataDto): Promise<OtpEntity>;
    confirmarCompraV1(confirmarCompraData: ConfirmDaviplataDto): Promise<ConfirmBuyEntity>;
}
